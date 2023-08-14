import { PUBLIC_API_ENDPOINT } from '$env/static/public';

export const load = async ({ cookies, fetch, params }) => {
  const message = await fetch(`${PUBLIC_API_ENDPOINT}/v1/message/${params.id}`, {
    headers: {
      cookie: cookies.get('id')
    }
  }).then(r=>r.json());

  return {
    message
  };
}