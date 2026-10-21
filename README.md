# YOSOI NOTE 1.4.0-rc.13

VRChatアバターの写真と使用アセットから一覧画像を作るWebアプリです。

**公開URL：https://yosoi-note-server.onrender.com/**

以前の公開URLを継続して使えます。ブラウザ内の保存先を変更しません。青・白のサイト画面、Sky初期配色、日本語の太字ゴシックPop、左右レイアウト・SNS画像比率・フレーム・PNG・ZIPバックアップに対応します。サンプルの肌は自然なピーチ系、衣装は青系です。

Cloudflare版：https://yosoi-note.yosoi-note.workers.dev/ も維持します。URL間の保存は別なので、移行時は元のURLでZIPを保存し、移動先で復元してください。マイ配色一覧は別に保存できます。

写真・編集・PNG・ノート保存はブラウザ内で処理します。BOOTH URL取り込みだけ既存Renderの取得サービスを使います。無料インスタンスは休止後の起動に時間がかかり、失敗時も手動登録できます。GAによる利用統計は任意・初期オフで、アプリに公開の統計画面はありません。

server-appはビルド済み画面と最小Nodeランタイム。Node 24以上でserver-appからnpm startで起動します。Renderの既存環境・APIコードは今回変更していません。site/の旧GitHub Pages版は別の静的配布です。Windows・スマホ実機、長期運用は未検証です。
