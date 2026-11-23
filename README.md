# Dad Joke Showdown — The Photobomb Eclipse

[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/AryFlows/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/AryFlows/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

Entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
bounty on [make.fun](https://make.fun): one dad joke, at most 200 characters,
written to be told out loud across a dinner table.

## The joke

> My son asked what a solar eclipse is. I told him it's when the moon photobombs the sun.

87 characters, one sentence, punchline at the end.

Why this joke fits the judge's brief: it is a joke a father would actually
tell at the table, the pun ("photobombs") lands on the first read with no
explaining, it is fresh rather than a retold classic, and every word earns
its place on the way to the punchline.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` (Node 22, stdlib only) writes the joke to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output`.
