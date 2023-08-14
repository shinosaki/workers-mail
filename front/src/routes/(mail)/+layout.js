import { redirect } from "@sveltejs/kit";
import { PUBLIC_API_ENDPOINT } from '$env/static/public';

export const load = async ({ fetch }) => {
  const res = await fetch(`${PUBLIC_API_ENDPOINT}/v1/ping`, {
    credentials: 'include'
  });

  if (res.status === 401) {
    throw redirect(302, '/login?alert=login.required&type=warn');
  };
};