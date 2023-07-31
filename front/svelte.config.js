import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    })
  },
  preprocess: vitePreprocess(),
};
