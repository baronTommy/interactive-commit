# interactive-commit

<!-- TODO パス変更 -->

![preview](https://github.com/baronTommy/interactive-commit/blob/main/media/eyeCatch.gif)

## Install

```bash
npm i -D interactive-commit
```

## Config file

`interactive-commit.config.js`

### Example

<!-- TODO パス変更 -->

https://github.com/baronTommy/interactive-commit/blob/main/interactive-commit.config.js

## Commit hook

### husky

`prepare-commit-msg`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

if [ -n "$CI" ] ; then
    echo "skip"
else
    exec < /dev/tty bin/run commit --hook $1 || true
fi
```

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![npm version](https://badge.fury.io/js/interactive-commit.svg)](https://badge.fury.io/js/interactive-commit)

<a href="https://gitmoji.dev">
  <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
</a>
