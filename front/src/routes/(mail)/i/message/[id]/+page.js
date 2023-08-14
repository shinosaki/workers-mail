import { PUBLIC_API_ENDPOINT as API } from '$env/static/public';

export const load = async ({ fetch, params }) => {
  const message = await fetch(`${API}/v1/message/${params.id}`, {
    credentials: 'include'
  }).then(r=>r.json());

  return {
    message
  };
}