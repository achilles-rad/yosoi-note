# 現在の試験版 1.3.1

安定版は https://achilles-rad.github.io/yosoi-note/ 、試験版は https://achilles-rad.github.io/yosoi-note/preview/ です。試験版ではHTMLの商品情報を端末内で取り込めます。画像は別途選択します。URL自動取得はCloudflareからBOOTHへの403が未解決です。下記1.2.0の説明は初期準備時の記録です。

# YOSOI NOTE — Browser Edition

1.2.0は静的サイトだけで動作します。アプリ用サーバー・Render・データベースの契約は不要です。商品情報の自動取得は含みません。

## 配布物
`npm run archive:static`で作る`YOSOI-NOTE-1.2.0-static.zip`の中身が公開対象です。index.html、assets、利用案内、依存ライセンスを含みます。開発用コード、参考画像、テスト証跡、秘密設定は含みません。

ZIPを展開し、その中身を静的サイトの配信先に置きます。通常のHTTPS静的サイトまたはローカルHTTPで開いてください。file://でHTMLを直接開く利用には対応していません。公開URLのサブフォルダーにも対応する相対パスでビルドします。

GitHub Pagesなどの静的サイトが候補です。実際のリポジトリや公開先はまだ作成していません。サーバーの起動処理、APIキー、環境変数、支払い方法の登録は不要です。ホスティングのアカウント条件・無料枠は公開先決定時に確認します。

## ローカル確認
ソース版はNode.js 24以上でnpm ci、npm run build、npm startの順に実行します。この起動処理は静的ファイルを端末に配信するだけで、BOOTH APIはありません。公開済みの静的サイトを使う人にはNode.jsの導入は不要です。

ページと素材の読み込み後、編集・画像生成・ブラウザ保存・ZIPは外部通信なしで処理します。未接続での初回起動や再読み込みを保証するPWAではありません。

## データ互換性
schemaVersion=1、IndexedDBキー接頭辞yosoi-v1:、ZIPのproject.jsonとimages構造を維持します。従来のmanual/fetched/failed状態、URL、画像、部位、配置を読み込めます。自動取得失敗の履歴は保存形式に残しますが、手動版では旧取得エラーを画面に表示しません。

後から取得機能を追加する際も同じItem/Asset形式に入力します。既存の手動データを一括上書きしない方針です。将来版の動作はまだ未検証です。

ブラウザ保存は配信元ごとに別です。ローカル版から公開版、公開URL変更、別ブラウザへの移行にはZIPを使います。自動保存はありません。

## GitHub Pagesに置く構成
GitHub Freeでは公開リポジトリが必要です。開発ソース用とは別に、推奨名yosoi-noteの公開リポジトリを作り、配信用ファイルだけを置きます。配信されるJavaScriptは公開されますが、開発用TypeScript・参考資料・写真・端末内保存ノートを置く必要はありません。

`npm run export:pages`でGitHub Pages用ZIPとアップロード用フォルダーを生成します。中身はsite/、README.md、.github/workflows/pages.ymlです。ZIPそのものをリポジトリに置くだけでは公開されません。展開したファイルを相対パスを保って登録します。開発プロジェクト全体はアップロードしません。

公開設定はSettings → Pages → SourceをGitHub Actionsにします。Actions → Publish YOSOI NOTE → Run workflowでmainブランチを選びます。公開対象はsite/だけです。ワークフローは手動起動で、ファイルの追加だけではデプロイしません。APIキー・有料プラン・Renderは不要です。

公開URLはGitHubが示した実際のURLを使います。公開後にHTTPS・画像読込・手動登録・PNG・保存・ZIP復元を確認します。リポジトリ・ワークフローの外部作成と実行はまだ未完了です。ログイン後に続行します。

公式資料: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
