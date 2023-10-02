import { drizzle } from 'drizzle-orm/d1';
import { insertEmail } from '$db';
import { data } from './data';

const user = 'lain';

export default {
  async fetch(req, env, ctx) {
    const db = drizzle(env.DB);

    const id = await insertEmail({db}, user, data);

    return new Response(id ?? 'Failed to insert data');
  }
}