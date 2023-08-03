# Workers Mail

Workers Mail は、 Cloudflare Workers 上で独自ドメインの電子メール ホスティングを行うアプリケーションです。 API とフロントエンドを提供しており、簡単にあなたのドメイン名のメールアドレスを管理できます。  

メールの送受信には Cloudflare の [Email Routing](https://developers.cloudflare.com/email-routing/email-workers/) 機能を使用します。

## Demo

[Workers Mail(mail.lain.im)](https://mail.lain.im/)

https://github.com/shinosaki/workers-mail/assets/88357168/0644e578-bfaf-4273-9676-a97649463e4f

## ToDo

- [ ] メール作成
- [ ] メール送信
- [ ] ラベリング
- [ ] メッセージ検索
- [ ] ロギング
- [ ] エンドツーエンド暗号化 (ProtonMail-like)

## フロントエンド

フロントエンドは [SvelteKit](https://kit.svelte.dev/) と [Tailwind CSS](https://tailwindcss.com/) で構築されたシングルページアプリケーションです。  

## API

APIは [Hono](https://hono.dev/) を利用しています。 Hono は Cloudflare Workers などのエッジ環境で API を構築するためのフレームワークです。

~~API ドキュメントは [API.md](./docs/API.md) を参照してください。~~  

<!-- ## 使い方

Workers Mail のセットアップは、以下の手順に従ってください。

1. Cloudflare にアカウントを作成し、自分のドメイン名を登録します。
2. Cloudflare Email Routing の利用を開始します。
3. Workers Mailをビルドします。 -->

## Build Frontend

1. `git clone https://github.com/shinosaki/workers-mail.git`
2. `cd workers-mail/`
3. `npm install`
4. `npm run front:build`

<!-- 1. Run `git clone https://github.com/shinosaki/workers-mail.git`
2. Go to project root and Run `npm install`
3. Login to Cloudflare with `wrangler login`
4. Edit `wrangler.toml`
   - Destination address for catch-all address require owner verification from the Cloudflare dashboard. https://developers.cloudflare.com/email-routing/setup/email-routing-addresses/#destination-addresses
5. Run `npm run kv:create`. Append `id` to `[[ kv_namespaces ]]` field in `wrangler.toml`
6. Run `npm run kv:init`
7. Run `npm run deploy`
8. Open `https://<Your Frontend Domain>/register` and create a new account
   - If you want to create an account, you will need to set the environment variable `DISABLE_REGISTRATION` to `false` from the Cloudflare Workers dashboard or `wrangler.toml` file.
9. Start using WORKERS MAIL!! -->

## Deploy

When the API route is `api.mail.lain.im`, the route of the front end MUST be the route of the API with "api." removed. (e.g. `mail.lain.im`)

1. `git clone https://github.com/shinosaki/workers-mail.git`
2. `cd workers-mail/`
3. `npm install`

### API

1. Edit `wrangler.toml`
2. `wrangler login`
3. `npm run kv:create`
4. `npm run kv:init`
5. `npm run deploy`

### Frontend

1. Set `PUBLIC_API_ENDPOINT` from `./front/.env`
2. `npm run deploy:front`
3. Set custom domains from [Cloudflare Pages dashboards](https://developers.cloudflare.com/pages/platform/custom-domains/)

## Author

[Shinosaki](https://shinosaki.com/) ([Twitter(@snsk82)](https://twitter.com/snsk82/))

## Dependencies

- API
  - [hono](https://hono.dev/) ([Github](https://github.com/honojs/hono))
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs) ([Github](https://github.com/dcodeIO/bcrypt.js))
- Front
  - [SvelteKit](https://kit.svelte.dev/) ([Github](https://github.com/sveltejs/kit))
  - [Tailwind CSS](https://tailwindcss.com/) ([Github](https://github.com/tailwindlabs/tailwindcss))
  - [Vite](https://vites.dev) ([Github](https://github.com/vitejs/vite))
  - [Tabler Icons](https://tabler-icons.io/) ([Github](https://github.com/tabler/tabler-icons))
  - [Day.js](https://day.js.org/) ([Github](https://github.com/iamkun/dayjs))
  - [PostalMime](https://www.npmjs.com/package/postal-mime) ([Github](https://github.com/postalsys/postal-mime))
  - Fonts
    - [Roboto](https://fontsource.org/fonts/roboto)
    - [Kosugi Maru](https://fontsource.org/fonts/kosugi-maru)

## License

[MIT](https://raw.githubusercontent.com/shinosaki/workers-mail/main/LICENSE)