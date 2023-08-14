import { PUBLIC_API_ENDPOINT } from '$env/static/public';

export const load = async ({ fetch }) => {
  const { status } = await fetch(`${PUBLIC_API_ENDPOINT}/auth/register`, {
    credentials: 'include'
  }).then(r=>r.json());

  return {
    status
  }
};