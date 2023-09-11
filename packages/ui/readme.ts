const structure = {
  component: "Root",
  children: [
    {
      component: "サイドバー",
      children: [
        {
          component: "サイドヘッダ",
          children: [{ component: "ロゴ" }, { component: "検索バー" }],
        },
        {
          component: "サイドボディ",
          children: [
            {
              component: "メニュー項目",
              children: [
                { component: "ホーム" },
                { component: "グラフ一覧" },
                { component: "データセット" },
                { component: "プロジェクト" },

                { component: "チケット" },
              ],
            },
          ],
        },
        {
          component: "サイドフッター",
          children: [
            {
              component: "アカウント",
              children: [
                { component: "通知" },
                { component: "ログアウト" },
                { component: "ユーザー管理" },
              ],
            },
            {
              component: "設定",
              children: [
                { component: "ヘルプリンク" },
                { component: "バージョン情報" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
