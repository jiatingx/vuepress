---
title: 组件
---

[[toc]]

### Node >= 14

[查看所有版本](https://nodejs.org/en/download/releases/)

### nvm [download](https://github.com/nvm-sh/nvm)

```sh{4,5}
# nvm 配置
# 安装后查找安装文件夹内 settings.txt
# 在文本的最后一行中加入这两行代码
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

### npm

```sh{2-3}
# npm 配置
npm config set registry "https://registry.npmmirror.com"
npm config set sass_binary_site "https://npmmirror.com/mirrors/node-sass"
```

### yarn

```sh
# 安装 yarn
npm install -g yarn
# yarn 配置
yarn config set registry "https://registry.npmmirror.com"
```
