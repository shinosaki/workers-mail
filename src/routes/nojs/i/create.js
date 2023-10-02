import { MailLayout } from '$lib/layouts';
import { getUser } from '$db';

export const create = {
  get: async (c) => {
    const { display, user, domains } = await getUser(c, c.session.value);

    return c.html(
      <MailLayout>
        <form method="POST" action="/api/v1/sending?redirect=/nojs/i/inbox" class="overflow-y-hidden h-full w-full p-10">
          <header class="flex flex-col gap-4 mb-4">
            <input name="subject" class="px-4 bg-black/20 w-full text-3xl font-bold" placeholder="Email Subject" />

            <div class="grid grid-cols-[theme(spacing.32)_1fr] gap-1">
              <p>Sender Name:</p>
              <input name="fromName" class="px-4 bg-black/20" value={display} />

              <p>Sender Address:</p>
              <select name="fromAddr" class="px-4 bg-black/20" required>
                {domains.map(domain => (
                  <option value={`${user}@${domain}`}>{`${user}@${domain}`}</option>
                ))}
              </select>

              <p>Recipient:</p>
              <input name="toAddr" class="px-4 bg-black/20 " placeholder="Destination address" required />
            </div>
          </header>

          <textarea name="body" class="w-full h-2/3 p-6 overflow-y-auto whitespace-pre-wrap break-words bg-black/20" placeholder="Email Body" />

          <footer class="mt-4 flex justify-between">
            <button class="w-32 rounded-lg bg-indigo-500 py-2 text-white text-center" name="type" value="send">Send</button>
            <button class="w-32 rounded-lg bg-slate-300 py-2 text-black text-center" name="type" value="save">Save</button>
          </footer>
        </form>
      </MailLayout>
    );
  }
};
