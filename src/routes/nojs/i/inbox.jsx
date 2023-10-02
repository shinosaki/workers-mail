import { MailLayout } from '$lib/layouts';
import { getUserEmails } from '$db';
import { parseEML, fromNow } from '$lib/utils';

export const inbox = {
  get: (type) => {
    return async (c) => {
      const messages = await getUserEmails(c, c.session.value, type)
        .then(r => parseEML(r));

      const Messages = (props) => (
        <li class="border-white/30 border-b">
          <a href={`/nojs/i/message/${props.id}`} class="flex gap-10 justify-between px-10 py-2">
            <p class="w-32 shrink-0">{props.email.from.name}</p>
            <p class="w-full">{props.subject}</p>
            <p class="w-32 shrink-0 text-right">{fromNow(props.email.date)}</p>
          </a>
        </li>
      );

      return c.html(
        <MailLayout>
          <ul class="overflow-auto h-full w-full rounded-lg border border-black/30">
            {(messages.length)
              ? messages.map(props => <Messages {...props} />)
              : <p>Message is empty.</p>
            }
          </ul>
        </MailLayout>
      );
    }
  }
};
