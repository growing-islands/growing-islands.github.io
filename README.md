# グローイングアイランズ コーポレートサイト

株式会社グローイングアイランズのコーポレートサイト

<a href="https://yume-lab.co.jp" target="_blank" rel="noreferrer">URL</a>

## Modules

- Next.js（SSR）
- TypeScript
- Jest
- Tailwind CSS
- Prettier
- ESLint
- StyleLint
- Pathpida
- husky（一部の GUI クライアントを考慮し v3 を使用）
- Amplify Console

## Development

1. 必要なモジュールのインストール

```bash
$ yarn install
```

2. 環境変数の設定  
   [.env.sample](./.env.sample)をコピーして情報を設定する

```bash
$ cp .env.sample .env
```

3. 開発サーバーの立ち上げ

```bash
$ yarn dev
$ open http://localhost:3000
```

## Git

GitHub にてリポジトリを管理。  
husky を用いて push 時に各種整形、テストなどを行う。

## Test

Jest を用いてテストを行う。

```bash
$ yarn test
```

## Deploy

Amplify Console によって特定ブランチへの push をトリガーにビルドが開始される。

### 対象ブランチ

| ブランチ名 | デプロイ先       |
| ---------- | ---------------- |
| main       | 本番環境         |
| staging    | ステージング環境 |
