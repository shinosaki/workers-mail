import { data } from './testdata';

export default {
  async fetch(req, env, ctx) {
    const kv = env.KV_EMAIL;

    await Promise.all(data.map(
      ({ key, value }) => kv.put(key, value)
    ));

    return new Response('success');
  }
}