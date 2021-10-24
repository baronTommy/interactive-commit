# interactive-commit

<p>
  <a href="https://semantic-release.gitbook.io/semantic-release/">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://gitmoji.dev">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
  </a>
</p>

![preview](https://github.com/baronTommy/interactive-commit/blob/main/media/eyeCatch.gif)

## Install

```bash
npm i -D interactive-commit
```

## Config file

`interactive-commit.config.js`

### Example

https://github.com/baronTommy/interactive-commit/blob/main/interactive-commit.config.js

## Commit hook

### husky

`prepare-commit-msg`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

exec < /dev/tty bin/run commit --hook $1
```
