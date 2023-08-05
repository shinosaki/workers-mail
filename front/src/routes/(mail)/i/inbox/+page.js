import { PUBLIC_API_ENDPOINT as API } from '$env/static/public';

export const load = async ({ fetch }) => {
  const messages = await fetch(`${API}/v1/messages`, { credentials: 'include' })
    .then(r=>r.json());

  return {
    messages
  };
}