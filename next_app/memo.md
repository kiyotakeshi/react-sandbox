
- React を使用すると実際にページに表示されている内容はソースコードになく、 React が JavaScript を使ってページを書き換える
    - クライアントサイドレンダリングと呼ばれる

- サーバサイドレンダリングと比較した問題点
    - サーバから受け取るソースコードでは、表示がわかりにくく、デバックが難しい
    - 検索エンジンが情報を取得できない

- Next.js は React をサーバサイドでレンダリングして表示するプログラム
    - 静的 Webページとして作成し、表示することもできる
    - SPA を複数ページによるWEBサイトを作り変える事もできる

```shell
yarn add next react react-dom
```

```shell
yarn install

yarn run dev
```

- 静的 HTML ファイルを作成
    - ダイナミックにページを操作するような処理はうごかない
　
```shell
yarn run build
```