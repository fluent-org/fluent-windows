---
title: 安装
type: getting-started
langKey: "zh"
order: 1
---

# 安装

<p class="description">安装 Fluent-Windows</p>

Fluent-Windows 是一个 [npm 包](https://www.npmjs.com/package/@fluent-windows/core).

## Install

```shell
// with npm
npm install @fluent-windows/core

// with yarn
yarn add @fluent-windows/core
```

需要注意，依赖版本 [react](https://www.npmjs.com/package/react) >= 16.8.0 和 [react-dom](https://www.npmjs.com/package/react-dom) >= 16.8.0。

## 字体图标

为了使用预先构建的 Fluent icons 图标, 必须先安装 `@fluent-windows/icons` 包:

```shell
// with npm
npm install @fluent-windows/icons

// with yarn
yarn add @fluent-windows/icons
```

## CDN

提供了两个通用模块定义(UMD)文件：

- 用于开发: https://unpkg.com/@fluent-windows/core@latest/umd/fluent-windows.development.js
- 用于生产: https://unpkg.com/@fluent-windows/core@latest/umd/fluent-windows.production.min.js

> ⚠️ 不建议在生产中使用这种做法，这样会导致客户端下载整个库，将会影响到性能和带宽利用率。
