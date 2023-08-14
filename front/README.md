# Workers Mail Frontend

[SvelteKit](https://kit.svelte.dev/) と [Tailwind CSS](https://tailwindcss.com/) で構築された Workers Mail のフロントエンドです。  

デフォルトで[SSR](https://kit.svelte.dev/docs/page-options#ssr)を行うため、 Tor Browser など Javascript が無効な環境でも動作します。

## Build

- `npm run build`
- Build Directory: `./.svelte-kit/cloudflare`
- Development build
  - `npx vite build --mode development`
  - `npm run preview`