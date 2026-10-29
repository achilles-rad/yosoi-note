# YOSOI NOTE セキュリティ更新 rc.36（2026-10-29）

- npm監査でWrangler→Miniflare→Undiciの高1・中2件を検出。アプリ開発環境とCloudflare配布環境のWranglerを4.155.0へ更新し、修正済みの依存関係へ更新する。ブラウザ配信コードに含まれるライブラリと、開発用ツールは区別する。
- Node.jsの推奨・本番バージョンを24.22.2へ統一。24.22.2未満の24系と26.12.1未満の26系など、未対応の実行環境ではサーバー起動を停止する。端末全体のNode設定は変更せず、公式配布物のSHA-256を照合した24.22.2でプロジェクトを検証する。
- RenderとCloudflareのHTTPS向けHSTS、COOP、未使用デバイス権限の制限を追加。API JSON応答にもCSPを適用。既存のCSP・オリジン検証・回数/通信量制限・ZIP展開制限は維持。
- Node APIへの途中切断・サイズ超過入力を明示的に停止し、非公開アドレス・ドキュメント用/旧中継アドレスへの取得を拒否。
- 機能と保存形式、両URL、無料サービス構成は維持。アバター写真をサーバーへ送らない。

公式情報: https://github.com/nodejs/undici/security/advisories/GHSA-2m5v-pch6-74hx
https://nodejs.org/en/blog/vulnerability/october-2026-security-releases
https://nodejs.org/en/blog/release/v24.22.2

監査・テスト・公開後検証の実測結果は検証記録へ別途保存。監査0件は未知の脆弱性やすべての攻撃がないことの保証ではない。Windows・スマホ実機、第三者による侵入試験は未実施。
