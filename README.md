# Reactポケモン図鑑

## 実際のReactアプリ

https://wangchangdog.github.io/react-pokemon-zukan/

## 概要

**Reactポケモン図鑑**は、ReactとTypeScriptを使用して開発されたポケモン図鑑アプリケーションです。本アプリは[PokeAPI](https://pokeapi.co/docs/v2)を利用してポケモンのデータを取得し、ユーザーがポケモンを一覧表示、詳細閲覧ができる機能を提供します。レスポンシブデザインを採用し、モバイルファーストで設計されています。

## 目次

- [Reactポケモン図鑑](#reactポケモン図鑑)
  - [概要](#概要)
  - [目次](#目次)
  - [特徴](#特徴)
  - [技術スタック](#技術スタック)
  - [デモ](#デモ)
  - [インストール方法](#インストール方法)
    - [前提条件](#前提条件)
    - [手順](#手順)
  - [使用方法](#使用方法)
  - [プロジェクト構成](#プロジェクト構成)
  - [貢献方法](#貢献方法)
  - [お問い合わせ](#お問い合わせ)

## 特徴

- **ポケモン一覧表示**: ポケモンの図鑑番号と日本語名をカード形式で一覧表示。
- **詳細画面**: 選択したポケモンの詳細情報（種族値、説明文など）を閲覧可能。
- **レスポンシブデザイン**: モバイルデバイスからデスクトップまで、様々な画面サイズに対応。
- **パフォーマンス最適化**: TanStack Queryを使用した効率的なデータフェッチングとキャッシング。

## 技術スタック

- **フロントエンド**:
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/)
  - [React Router](https://reactrouter.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [TanStack Query](https://tanstack.com/query/latest)
  - [query-key-factory](https://github.com/lukemorales/query-key-factory)

- **API**:
  - [PokeAPI](https://pokeapi.co/docs/v2)

## デモ

[ポケモン図鑑デモサイト](https://wangchangdog.github.io/react-pokemon-zukan/)

<img width="301" alt="スクリーンショット 2024-10-05 1 18 37" src="https://github.com/user-attachments/assets/4325c964-2a5c-439e-8fdf-4352fafc1e1c">
<img width="301" alt="スクリーンショット 2024-10-05 1 19 10" src="https://github.com/user-attachments/assets/e882772f-31a0-41bf-bd31-c8339efe1b88">


## インストール方法

### 前提条件

- **Node.js**: バージョン20以上
- **Git**: バージョン2以上

### 手順

1. **リポジトリのクローン**

   ```bash
   git clone https://github.com/wangchangdog/react-pokemon-zukan.git
   cd react-pokemon-zukan
   ```

2. **依存関係のインストール**

   ```bash
   npm install
   ```

3. **開発サーバーの起動**

   ```bash
   npm run dev
   ```

4. **ブラウザで確認**

   ブラウザで `http://localhost:5173` にアクセスし、アプリケーションが動作していることを確認します。

## 使用方法

1. **ポケモン一覧の閲覧**

   アプリケーションを開くと、ポケモンの一覧が表示されます。各ポケモンカードには図鑑番号と日本語名が表示されています。画面下までスクロールすると続きを読み込みます。

2. **詳細情報の確認**

   任意のポケモンカードをクリックすると、そのポケモンの詳細情報ページに移動します。詳細ページでは種族値や説明文など、より詳しい情報が確認できます。

3. **前後のポケモンへ移動**

   詳細ページ下部の「前へ」「次へ」リンクから、隣の図鑑番号のポケモンへ移動できます。

## プロジェクト構成

```
react-pokemon-zukan/
├── public/
│   ├── 404.html
│   └── favicon.svg
├── src/
│   ├── api/
│   │   ├── common.type.ts
│   │   ├── pokemon.ts
│   │   ├── pokemon.type.ts
│   │   ├── pokemonDetail.ts
│   │   ├── pokemonSpecies.ts
│   │   └── pokemonWithJapaneseName.ts
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── PokemonCard.tsx
│   │   └── PokemonTypeLabel.tsx
│   ├── pages/
│   │   ├── PokemonList.tsx
│   │   └── PokemonDetail.tsx
│   ├── App.tsx
│   ├── config.ts
│   ├── queryKeys.ts
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 貢献方法

1. **フォークする**

   リポジトリをフォークしてください。

2. **ブランチを作成する**

   ```bash
   git checkout -b feature/新機能
   ```

3. **変更をコミットする**

   ```bash
   git commit -m "新機能の追加"
   ```

4. **プッシュする**

   ```bash
   git push origin feature/新機能
   ```

5. **プルリクエストを作成する**

   GitHub上でプルリクエストを作成してください。

## お問い合わせ

質問やフィードバックがございましたら、[issues](https://github.com/wangchangdog/react-pokemon-zukan/issues)にてご連絡ください。
