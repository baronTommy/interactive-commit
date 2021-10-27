# interactive-commit

<p>
  <a href="https://semantic-release.gitbook.io/semantic-release/">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://gitmoji.dev">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
  </a>
  <a href="https://codecov.io/gh/baronTommy/interactive-commit">
    <img src="https://codecov.io/gh/baronTommy/interactive-commit/branch/main/graph/badge.svg?token=RBVLU6CIPQ"/>
  </a>
  <a href="https://github.com/baronTommy/interactive-commit/actions/workflows/release.yml">
    <img alt=".github/workflows/release.yml" src="https://github.com/baronTommy/interactive-commit/actions/workflows/release.yml/badge.svg">
  </a>
</p>

![preview](https://github.com/baronTommy/interactive-commit/blob/main/media/eyeCatch.gif)

## Use

```bash
npm i -D interactive-commit

touch interactive-commit.config.js
```

example

- https://github.com/baronTommy/interactive-commit/blob/main/interactive-commit.config.js

## Commit hook

### husky

`prepare-commit-msg`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

exec < /dev/tty && npx interactive-commit commit --hook
```

### githooks

`prepare-commit-msg`

```bash
#!/bin/sh

if [[ "$(git config --get my.interactive)" = yes ]];then
    # git -c my.interactive=yes commit
    exec < /dev/tty bin/run commit --hook
fi
```

```bash
git -c my.interactive=yes commit
```

`package.json`

```json
"scripts": {
  "prepare": "git config --local core.hooksPath .githooks"
}
```
