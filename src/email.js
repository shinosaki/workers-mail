// import { postalMime } from 'postal-mime/dist/node';
import { drizzle } from 'drizzle-orm/d1'
import { parseEmailAddr } from '$lib/utils';
import { allUsers, insertEmail } from '$db';

// const PostalMime = postalMime.default;

const readEmailBody = async (stream) => {
  const reader = stream.getReader();
  let data = '';

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    };

    data += new TextDecoder().decode(value);
  };

  return data;
};

const Email = async (message, env, ctx) => {
  const db = drizzle(env.DB);
  const { to, from, raw, headers } = message;
  const { user } = parseEmailAddr(to);

  const eml = await readEmailBody(raw);
  // const parsed = await new PostalMime().parse(eml);

  const USERS = await allUsers({ db }).then(r => r.map(({ user }) => user));

  if (!USERS.includes(user)) {
    console.log(`ERROR: User "${user}" does not exist`);

    if (env.CATCH_ALL_ADDRESS) {
      console.log(`Forward to catch-all address "${env.CATCH_ALL_ADDRESS}"`);
      await message.forward(env.CATCH_ALL_ADDRESS);
    }

    message.setReject('Address not allowed');
  } else {
    const id = await insertEmail({ db }, user, {
      type: 'message',
      subject: headers.get('subject'),
      to: [{
        addr: to,
        name: headers.get('to'),
      }],
      from: {
        addr: from,
        name: headers.get('from'),
      },
      headers: Object.fromEntries(headers),
      eml,
    });

    console.log(`Stored message "${id}"`);
  };
};

export default Email;
