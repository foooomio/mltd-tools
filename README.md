# mltd-tools

JavaScript libraries for _THE IDOLM@STER Million Live! Theater Days_

## Libraries

- Princess Client - HTTP Client for Princess powered by matsurihi.me
- MLTD Idols - Utility for MLTD idols

## Usage

### Browser / Deno

Import the library from jsDelivr by ES modules.

```js
import princess from "https://cdn.jsdelivr.net/gh/foooomio/mltd-tools@1.0.0/princess-client.js";
```

### Node.js

Download the repository and place it anywhere you like.

If `global.fetch` is `undefined`, use a `fetch` polyfill like [cross-fetch](https://www.npmjs.com/package/cross-fetch).

```js
import "cross-fetch/polyfill";
import princess from "path/to/princess-client.js";
```

## Examples

### Princess Client

```js
import princess, { range } from "./princess-client.js";

const cards = await princess.cards.search({
  idolId: 21,
  rarity: "ssr",
});

const logs = await princess.rankings.logs({
  eventId: 70,
  type: "eventPoint",
  ranks: range(1, 10),
});
```

Be sure to read the terms of service of [Princess](https://api.matsurihi.me/docs/).

### MLTD Idols

```js
import mltd from "./mltd-idols.js";

const allIdols = mltd.getAllIdols();
const idol1 = mltd.getIdolByName("徳川まつり");
const idol2 = mltd.getIdolById(21);
const idols = mltd.getIdolsByType("Princess");
```

## License

MIT License
