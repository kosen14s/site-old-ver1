# kosen14s.github.io

## これはなに

[http://kosen14s.github.io](http://kosen14s.github.io) のソースコードです。

## はじめかた

※ clone / push するためには Collaborator権限が必要です。 yamasy1549に声をかけてください！

```
git clone https://github.com/kosen14s/kosen14s.github.io.git
# もしくは git clone git@github.com:kosen14s/kosen14s.github.io.git
```

```
npm i
# 事前に Node.js を入れてください
```
Node.js: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

```
gulp compile
# 初回だけ
```

```
gulp watch
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
