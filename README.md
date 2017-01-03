# kosen14s.github.io

## これはなに

[http://kosen14s.github.io](http://kosen14s.github.io) のソースコードです。

## はじめかた

※ clone / push するためには Collaborator権限が必要です。 yamasy1549に声をかけてください！

```
git clone https://github.com/kosen14s/kosen14s.github.io.git
# もしくは git clone git@github.com:kosen14s/kosen14s.github.io.git

cd kosen14s.github.io.git
```

```
npm i -g yarn
# 事前に Node.js を入れてください

yarn
# 必要なpackageを落としてきます
```
Node.js: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

```
yarn run build
# 初回だけ
```

```
yarn run watch
# ファイルの変更を検知して自動でブラウザを更新します
```

[http://localhost:3000](http://localhost:3000) にアクセス

`src/` 内のファイルをいじって commit してください。

## ブランチの切りかた（生やしかた）

`develop` から好きな名前で生やしてください。

pull req は「**base: develop**」「**compare: (生やしたブランチ)**」で作ります。

pull req を作ると、コンパイルエラーなどがないかテストが走ります。オールグリーンにならないと merge ができません！

`develop` に merge されると、`dest/` の中身が自動で `master` に push されて、本番ページに反映されます。

## 各ページ

### 読書会ページ

`src/yaml/bookclub.yml` でコンテンツのデータを管理しています。ここにデータを追加するだけで、読書会のページに反映されるようになります。形式は以下のとおりです。

```
-
  account_name: yamasy1549
  account_url: https://twitter.com/yamasy1549
  account_icon: sample-icon.png
  title: あめんぼあかいなあいうえおうきもにこえびもおよいでる
  url: http://yamasy.info
  description: 全体的な明るさを示す輝度信号を得るための「足し算」には、高周波（青や紫）に対する感度のよいS錐体からの信号が含まれない。そもそもS錐体は非常に感度が鈍く、全体的な輝度にはほとんど寄与しないため、S錐体からの入力がなくても実質的な差は生じない。
```

* `account_icon` : `src/images/bookclub` に置いてください。

* `description` : プレーンテキストです。途中にリンクや色や改行をはさむことはできません。

clone してもいいですが、ブラウザ上で編集することもできます。

![/kosen14s.github.io](./images/home.png)

`src/yaml/[ファイル名].yml` に移動します。

![/kosen14s.github.io/blob/develop/src/yaml/*.yml](./images/yaml.png)

右の方に鉛筆マークがあるのでクリックして編集します。

![commit](./images/commit-changes.png)

編集ができたら上側のフォームに変更内容を書きます。
ラジオボタンは `Create a new branch` の方を選択します。その下の小さいフォーム（ブランチ名）は何でも構いません。

準備ができたら `Propose file change` ボタンを押します。

![/kosen14s.github.io/compare/develop...yamasy1549-patch-1?quick_pull=1](./images/open-a-pull-request.png)

* `base: develop` `compare: [さっきのフォームに入れたブランチ名]` になっていること
* 自分のした変更

を確認したら `Create pull request` ボタンを押します。

![/kosen14s.github.io/pull](./images/pull-request.png)

`All checks have passed` になってたらOKです。 `Merge pull request` -> `Confirm merge` ボタンを押します。

![/kosen14s.github.io/pull](./images/merged-pull-request.png)

しばらくすると変更が反映されます。 `Delete branch` でブランチを消しておきます。
