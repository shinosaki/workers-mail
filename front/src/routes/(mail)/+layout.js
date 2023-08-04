import { redirect } from "@sveltejs/kit";
import { PUBLIC_API_ENDPOINT as API } from '$env/static/public';

export const load = async ({ fetch, url }) => {
  const res = await fetch(`${API}/v1/ping`, { credentials: 'include' });

  if (res.status === 401) {
    throw redirect(302, '/login?alert=login.required&type=warn');
  };
}