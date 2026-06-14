あなたは ChatGPT Pro 側の外部思考相手です。Codex と議論しながら、React/TypeScript 初学者向けの「基礎練習カリキュラム」として、このリポジトリに不足している学習要素、練習導線、教材化ポイントを洗い出してください。

添付 zip:
- react-pokemon-zukan-075e51a.zip

対象:
- repository: wangchangdog/react-pokemon-zukan
- local path: /Users/kaperrine_dog/projects/corolab/school/react-pokemon-zukan-doc/react-pokemon-zukan
- commit: 075e51adf0481834ebb0e6aedb1e4dbbce40dc91
- branch: master

現状の前提:
- React 18 + TypeScript + Vite のポケモン図鑑アプリです。
- PokeAPI を使い、一覧、詳細、検索/絞り込み系の基礎を扱う教材の題材として使う想定です。
- 目的は「完成アプリの品質レビュー」だけではなく、「初学者が React の基礎を練習するためのカリキュラムとして何が足りないか」を見つけることです。
- Product Design / Creative Production 観点も入れて、画面で確認できる成果、提出物、スクリーンショット、UI 観察、改善前後の説明などの不足も見てください。

見てほしい観点:
1. React 基礎の練習として不足している概念
   - props/state、component 分割、event handler、controlled input、conditional rendering、list rendering、routing、data fetching、loading/error state、型定義、再利用可能な関数や hooks など。
2. カリキュラムとしての不足
   - 章立て、練習問題、セルフチェック、確認コマンド、画面確認、つまずきポイント、段階的な難易度、復習課題、発展課題。
3. 初学者が写経で終わらないための不足
   - 「何を考えればよいか」「どこを変更すればよいか」「どう動作確認するか」「なぜその設計にするか」が不足していないか。
4. Product Design / Creative Production 観点
   - UI の完成条件、スクリーンショット提出、状態が見える UI、空状態/エラー状態、レスポンシブ確認、見た目の改善を基礎練習に落とし込めているか。
5. リポジトリ実態との不整合
   - README の説明と実装のずれ、存在しない機能説明、古い技術前提、初学者を誤誘導するコードや説明がないか。

出力形式:
- まず、重大度順に must fix / should fix / note を分けてください。
- 各項目は、対象ファイルまたは機能、何が不足しているか、なぜ初学者カリキュラムとして問題か、最小改善案、検証方法を含めてください。
- 次に、Codex が次に実施すべき具体アクションを 5-10 個に絞ってください。
- 最後に、PR を切るならどの scope に分けるべきかを提案してください。
- zip の中身を確認できない場合は、確認できないと明記し、推測だけで「追加指摘なし」とは言わないでください。
