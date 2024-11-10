import { CSV } from "https://js.sabae.cc/CSV.js";

const fn = Deno.args[0];

const hex2bas = (hex, addr = 0x700) => {
  const s = [];
  s.push("POKE#" + addr.toString(16));
  for (let i = 0; i < hex.length; i += 2) {
    const n = parseInt(hex.substring(i, i + 2), 16);
    s.push("," + n);
  }
  return s.join("");
};

const data = await CSV.fetchJSON(fn);
let addr = 0x700;
let line = 100;
let linestep = 10;
for (const n of data) {
  const bas = hex2bas(n.hex, addr);
  addr += 8;
  console.log(line + " " + bas);
  line += linestep;
}
