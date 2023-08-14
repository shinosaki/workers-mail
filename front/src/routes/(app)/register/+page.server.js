import { PUBLIC_API_ENDPOINT } from '$env/static/public';

export const load = async ({ cookies, fetch }) => {
  const { status } = await fetch(`${PUBLIC_API_ENDPOINT}/auth/register`).then(r=>r.json());

  return {
    status
  }
};