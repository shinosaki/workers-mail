import { redirect } from "@sveltejs/kit";
import { PUBLIC_API_ENDPOINT } from '$env/static/public';

export const load = async () => {
  throw redirect(302, '/i/inbox');
};