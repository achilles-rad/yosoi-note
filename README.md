# YOSOI NOTE 1.4.0-rc.5

VRChatアバターの写真と使用アセットを一枚にまとめるWebアプリです。

写真編集・13部位の接続線・アセット並び替え・Material配色6種・PNG・ブラウザ保存・ZIPバックアップに対応します。接続線を個別・全件で非表示にできます。アプリ内の「使い方」で操作説明を読めます。スマホ向け画面を追加し、Chromeを推奨します。実機検証は未実施です。

[サーバー版プレビュー](https://yosoi-note-server.onrender.com/)ではBOOTH URLから商品情報と画像を取得できます。Render無料枠を使用し、休止後の起動には時間がかかります。取得できない場合も手動登録できます。写真・編集・保存は端末内で処理します。保存は自動ではありません。端末・ブラウザ間の移行はZIPを使用してください。

ソース配布ZIPから開発する場合は、Node.js 24以上でnpm ci、npm run build、npm startを実行します。検証はnpm run verifyとnpm run test:e2eです。

このリポジトリのserver-appはビルド済み画面と最小限のNode.jsランタイムです。Node.js 24以上で起動できます。

```sh
cd server-app
npm start
```

公開時はYOSOI_MODE=public、BOOTH_LOOKUP_ENABLED=true、VITE_BOOTH_API_BASE=/apiと、PUBLIC_ORIGINまたはRENDER_EXTERNAL_URLを設定してください。既存site/のGitHub Pages版は別の静的配布です。
