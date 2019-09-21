---
title: 安装
type: getting-started
langKey: "zh"
---

# 安装

<p class="description">安装 Fluent-UI</p>

Fluent-UI 是一个 [npm 包](https://www.npmjs.com/package/@fluent-ui/core).

## Install

```bash
// with npm
npm install @fluent-ui/core

// with yarn
yarn add @fluent-ui/core
```

需要注意，依赖版本 [react](https://www.npmjs.com/package/react) >= 16.8.0 和 [react-dom](https://www.npmjs.com/package/react-dom) >= 16.8.0。

## 字体图标

为了使用预先构建的 Fluent icons 图标, 必须先安装 `@fluent-ui/icons` 包:

```bash
// with npm
npm install @fluent-ui/icons

// with yarn
yarn add @fluent-ui/icons
```

## CDN

提供了两个通用模块定义(UMD)文件：

- 用于开发: https://unpkg.com/@fluent-ui/core@latest/umd/fluent-ui.development.js
- 用于生产: https://unpkg.com/@fluent-ui/core@latest/umd/fluent-ui.production.min.js

> ⚠️ 不建议在生产中使用这种做法，这样会导致客户端下载整个库，将会影响到性能和带宽利用率。
