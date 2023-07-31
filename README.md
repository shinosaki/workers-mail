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

## Build

1. Login to Cloudflare with `wrangler login`
2. Edit `wrangler.toml`
   - Destination address for catch-all address require owner verification from the Cloudflare dashboard. https://developers.cloudflare.com/email-routing/setup/email-routing-addresses/#destination-addresses
3. Run `npm run kv:create`. Append `id` to `[[ kv_namespaces ]]` field in `wrangler.toml`
4. Run `npm run kv:init`
5. Run `npm run deploy`
6. Open `https://<Your Frontend Domain>/register` and create a new account
   - If you want to create an account, you will need to set the environment variable `DISABLE_REGISTRATION` to `false` from the Cloudflare Workers dashboard or `wrangler.toml` file.
7. Start using WORKERS MAIL!!

## Author

[Shinosaki](https://shinosaki.com/)

- [Twitter(@snsk82)](https://twitter.com/snsk82/)

## License

[MIT](https://raw.githubusercontent.com/shinosaki/workers-mail/main/LICENSE)