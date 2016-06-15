# kosen14s.github.io

## これはなに

![http://kosen14s.github.io](http://kosen14s.github.io) のソースコードです。

## はじめかた

```
git clone https://github.com/kosen14s/kosen14s.github.io.git
# もしくは git clone git@github.com:kosen14s/kosen14s.github.io.git
```

```
npm i
# 事前に Node.js を入れてください
```

```
gulp compile
# 初回だけ
```

```
gulp watch
# ファイルの変更を検知して自動でブラウザを更新します
```

![localhost:3000](localhost:3000) にアクセス

`src/` 内のファイルをいじって commit してください。

## ブランチの切りかた（生やしかた）

`develop` から好きな名前で生やしてください。

pull req は **base: develop** **compare: (生やしたブランチ)** で作ります。

pull req を作ると、コンパイルエラーなどがないかテストが走ります。オールグリーンにならないと merge ができません！

`develop` に merge されると、`dest/` の中身が自動で `master` に push されて、本番ページに反映されます。
