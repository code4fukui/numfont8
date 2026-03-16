# numfont8

English README is here: [README.md](README.md)

日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

さまざまな言語の数字フォントデータのコレクション。

## データ

このリポジトリには以下のCSVファイルが含まれています:

- `index.csv`: 言語と関連するデータファイルのインデックス
- `num_arabic.csv`, `num_japanese.csv`, `num_chinese.csv`, `num_greek.csv`, `num_korean.csv`: 異なる言語の数値フォントデータ

## IchigoJamのPCGの作成

IchigoJamプラットフォームのための数値フォントデータを生成するには、以下のコマンドを実行してください:

```sh
deno run -A numfont2bas.js num_bengali.csv
```

これにより、IchigoJam端末でカスタムキャラクター(PCG)を作成するために使用できるBASICコードが出力されます。

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
