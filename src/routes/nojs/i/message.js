import { MailLayout } from '$lib/layouts';
import { getEmail } from '$db';
import { parseEML, fromNow } from '$lib/utils';

export const message = {
  get: async (c) => {
    const { id } = c.req.param();
    const data = await getEmail(c, id).then(r => parseEML(r));

    const { subject, date, from, to, html, text } = data.email;

    return c.html(
      <MailLayout>
        <article class="overflow-y-hidden h-full w-full p-10">
          <header class="flex flex-col gap-4 mb-4">
            <div class="flex justify-between items-end">
              <h1 class="text-3xl font-bold">{subject}</h1>
              <p class="text-white/80 italic">{fromNow(date)}</p>
            </div>

            <div class="grid grid-cols-[theme(spacing.32)_1fr] gap-1">
              <p>From:</p>
              <p>{`${from.name} <${from.address}>`}</p>
              <p>To:</p>
              <p>{to.map(v => `${v.name} <${v.address}>`).join(', ')}</p>
            </div>
          </header>
          {(html)
            ? <iframe srcdoc={html} class="w-full h-4/5 bg-white" />
            : <main class="w-full h-4/5 p-6 overflow-y-auto whitespace-pre-wrap break-words bg-black/20">
                {text}
              </main>
          }
        </article>
      </MailLayout>
    );
  }
};
