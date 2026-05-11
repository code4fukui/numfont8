# numfont8

さまざまな文字体系における数字（0-9）の8x8ピクセルフォントデータを収録したオープンソースのコレクションです。本プロジェクトは、[IchigoJam](https://ichigojam.net/)でカスタム文字を定義するためのBASICコードを生成するツールとデータセットを提供します。

## デモ

**[利用可能な数字セットのインデックスを表示](https://code4fukui.github.io/numfont8/)**

デモページでは `index.csv` の内容を表示し、本コレクションに含まれるすべての言語と文字体系を一覧できます。

## データ形式

各 `num_*.csv` ファイルには、0から9までの数字の8x8ピクセルフォントデータが含まれています。ファイルは以下の2列で構成されています。

- `num`: 数字（0-9）
- `hex`: 8バイトの文字データを表す16文字の16進数文字列。各バイトは文字の8ピクセルの1行に対応します。

たとえば `num_arabic.csv` では、数字の `0` は `0000103810000000` で表されます。

## 使い方: IchigoJam PCGコードの生成

付属のDenoスクリプトを使用して、フォントのCSVファイルをIchigoJamのBASICコードに変換できます。

### 前提条件

- [Deno](https://deno.land/) ランタイム
- インターネット接続（CSV解析モジュールを取得するため）

### コマンド

フォントのCSVファイルへのパスを引数として `numfont2bas.js` スクリプトを実行します。

```sh
deno run -A numfont2bas.js num_arabic.csv
```

このスクリプトは、一連のBASICの `POKE` コマンドを標準出力に出力します。このコードは、アドレス `#700` から始まるPCG（Programmable Character Graphics）メモリ領域にフォントデータを書き込みます。

**出力例:**

```basic
100 POKE#700,0,0,16,56,16,0,0,0
110 POKE#708,32,32,32,32,16,16,16,0
120 POKE#710,36,36,60,32,16,16,16,0
' ... 3〜9の数字についても同様
```

このコードをIchigoJamのプログラムにコピーすることで、カスタム数字文字を定義して使用できます。

## 利用可能なデータセット

- [index.csv](index.csv): 利用可能なすべての数字セットのインデックス
- [num_arabic.csv](num_arabic.csv)
- [num_chinese.csv](num_chinese.csv)
- [num_greek.csv](num_greek.csv)
- [num_japanese.csv](num_japanese.csv)
- [num_korean.csv](num_korean.csv)

## 参考資料

- [ISO 639-2 コード一覧 (ja.wikipedia.org)](https://ja.wikipedia.org/wiki/ISO_639-2%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7)

## ライセンス

本プロジェクトは MIT License の下で公開されています。
