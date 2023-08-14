import { PUBLIC_API_ENDPOINT } from '$env/static/public';

export const load = async ({ cookies, fetch }) => {
  const messages = await fetch(`${PUBLIC_API_ENDPOINT}/v1/messages`, {
    headers: {
      cookie: cookies.get('id')
    }
  }).then(r=>r.json());

  return {
    messages
  };
}