import { PUBLIC_API_ENDPOINT as API } from '$env/static/public';

export const load = async ({ fetch, params }) => {
  const json = await fetch(`${API}/v1/message/${params.id}`, { credentials: 'include' })
    .then(r=>r.json());

  return {
    ...json
  };
}