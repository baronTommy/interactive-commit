# interactive-commit

<!-- TODO パス変更 -->

![preview](https://github.com/baronTommy/interactive-commit/blob/main/media/eyeCatch.gif)

## Install

```bash
npm i -D @capsule-corporation/interactive-commit
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
