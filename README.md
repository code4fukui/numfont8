# numfont8
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A collection of numeric font data for various languages.

## Data

The repository contains the following CSV files:

- `index.csv`: An index of the languages and associated data files.
- `num_arabic.csv`, `num_japanese.csv`, `num_chinese.csv`, `num_greek.csv`, `num_korean.csv`: Numeric font data for different languages.

## Make IchigoJam PCG

To generate numeric font data for the IchigoJam platform, run the following command:

```sh
deno run -A numfont2bas.js num_bengali.csv
```

This will output BASIC code that can be used to create custom characters (PCG) on the IchigoJam device.

## License
This project is licensed under the [MIT License](LICENSE).
