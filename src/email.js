//  message.to/from = Envelope To/From
//  message.headers.get('to'/'from') = Header To/From

// ULID doesn't work on Cloudflare Workers
// import { ulid } from 'ulid';
// import { ulidFactory } from "ulid-workers";

import { postalMime } from 'postal-mime/dist/node';

export const Email = async (message, env, ctx) => {
  const kv = env.KV_EMAIL;
  const id = crypto.randomUUID();
  const { headers, from, to } = message;
  const [ user ] = to.split(/[\+@]/);

  console.log(`Received message from ${from} to ${to}`);

  const readEmailBody = async stream => {
    const text = new TextDecoder();
    const reader = stream.getReader();
    let data = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      data += text.decode(value);
    };

    return data;
  };

  const data = {
    id,
    date: new Date().toISOString(),
    subject: headers.get('subject'),
    headers: Object.fromEntries(headers),
    from: {
      name: headers.get('from'),
      addr: from
    },
    to: [{
      name: headers.get('to'),
      addr: to
    }],
    eml: await readEmailBody(message.raw)
  };

  const PostalMime = postalMime.default;
  data.email = await new PostalMime().parse(data.eml);

  const USERS = await kv.get('users', { type: 'json' });

  if (!USERS.includes(user)) {

    console.log('No users matched');

    if (env.CATCH_ALL_ADDRESS) {
      console.log('Forward to catch-all address')
      await message.forward(env.CATCH_ALL_ADDRESS);
    }

    if (env.BOUNCE_MAIL) {
      console.log('Send bounce mail')
      message.setReject('Address not allowed');
    }

  } else {

    await kv.put(`message:${user}:${id}`, JSON.stringify(data));
    console.log(`Saved message (kvid: message:${user}:${id})`);

    const userData = await kv.get(`user:${user}`, { type: 'json' });
    userData.messages.push(id);

    await kv.put(`user:${user}`, JSON.stringify(userData));

  }
}