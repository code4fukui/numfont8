# numfont8

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An open-source collection of 8x8 pixel font data for numerals (0-9) in various writing systems. This project provides datasets and a tool to generate BASIC code for defining custom characters on the [IchigoJam](https://ichigojam.net/) computer.

## Demo

**[View the index of available numeral sets](https://code4fukui.github.io/numfont8/)**

The demo page displays the contents of `index.csv`, which lists all the languages and scripts included in this collection.

## Data Format

Each `num_*.csv` file contains 8x8 pixel font data for the digits 0 through 9. The files have two columns:

-   `num`: The digit (0-9).
-   `hex`: A 16-character hexadecimal string representing the 8-byte character data. Each byte corresponds to one 8-pixel row of the character.

For example, in `num_arabic.csv`, the digit `0` is represented by `0000103810000000`.

## Usage: Generate IchigoJam PCG Code

You can use the provided Deno script to convert a font CSV file into IchigoJam BASIC code.

### Prerequisites

-   [Deno](https://deno.land/) runtime
-   An internet connection (to fetch a CSV parsing module)

### Command

Run the `numfont2bas.js` script with the path to a font CSV file as an argument:

```sh
deno run -A numfont2bas.js num_arabic.csv
```

The script will output a series of BASIC `POKE` commands to standard output. This code writes the font data into the Programmable Character Graphics (PCG) memory area, starting at address `#700`.

**Example Output:**

```basic
100 POKE#700,0,0,16,56,16,0,0,0
110 POKE#708,32,32,32,32,16,16,16,0
120 POKE#710,36,36,60,32,16,16,16,0
' ... and so on for digits 3-9
```

You can copy this code into your IchigoJam program to define and use the custom numeral characters.

## Available Datasets

-   [index.csv](index.csv): An index of all available numeral sets.
-   [num_arabic.csv](num_arabic.csv)
-   [num_chinese.csv](num_chinese.csv)
-   [num_greek.csv](num_greek.csv)
-   [num_japanese.csv](num_japanese.csv)
-   [num_korean.csv](num_korean.csv)

## Reference

-   [ISO 639-2 Code List (ja.wikipedia.org)](https://ja.wikipedia.org/wiki/ISO_639-2%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7)

## License

This project is licensed under the MIT License.