# YOSOI NOTE 1.4.0-rc.19

VRChatアバターの写真と使用アセットを一枚にまとめるWebアプリです。

写真編集・13部位の接続線・アセット並び替え・ライト・ダーク各5種の配色・カード3形式・SNS向け5比率・カード下段URL・PNG・ブラウザ保存・ZIPバックアップに対応します。接続線を個別・全件で非表示にできます。モノトーンと、配色名を付けて9色を記録・呼び出す配色メモリを追加しました。メモリは専用ファイルでも移行できます。アプリ内の「使い方」で操作説明を読めます。スマホ向け画面を追加し、Chromeを推奨します。実機検証は未実施です。

[公開版YOSOI NOTE](https://yosoi-note-server.onrender.com/)ではBOOTH URLから商品情報と画像を取得できます。Render無料枠を使用し、休止後の起動には時間がかかります。取得できない場合も手動登録できます。写真・編集・保存は端末内で処理します。保存は自動ではありません。端末・ブラウザ間の移行はZIPを使用してください。

ソース配布ZIPから開発する場合は、Node.js 24以上でnpm ci、npm run build、npm startを実行します。検証はnpm run verifyとnpm run test:e2eです。

このリポジトリのserver-appはビルド済み画面と最小限のNode.jsランタイムです。Node.js 24以上で起動できます。

```sh
cd server-app
npm start
```

公開時はYOSOI_MODE=public、BOOTH_LOOKUP_ENABLED=true、VITE_BOOTH_API_BASE=/apiと、PUBLIC_ORIGINまたはRENDER_EXTERNAL_URLを設定してください。既存site/のGitHub Pages版は別の静的配布です。

利用者の任意選択後だけGoogle Analyticsによる利用統計を計測します。集計結果は管理者のGoogleアカウントから確認し、アプリに公開の統計画面はありません。写真や入力した商品情報は計測に送りません。設定はdocs/ANALYTICS_1.4.0-rc.7.mdを参照してください。

写真編集は専用タブへ統合し、小・標準・大と四隅のドラッグでサイズを変更できます。使い方に注意事項・利用条件を記載しています。Cloudflare版 https://yosoi-note.yosoi-note.workers.dev/ とRender版の両方を継続更新します。

Side Listは件数・比率でカードサイズを自動調整し、4件以上は2列です。正方形カードも選べます。指示線はSide List切替・新規登録時には非表示で開始し、必要なら表示できます。16:9で収まらない分は次ページへ送ります。

「サンプルで試す」はAI生成の架空キャラクター（黒髪ロング・黒のジャンパースカート）と、その髪・服・顔のサムネイルで開始します。実在の販売商品ではありません。既存の保存データは変更しません。
