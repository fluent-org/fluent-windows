---
title: Installation
type: getting-started
langKey: "en"
order: 1
---

# Installation

<p class="description">Install Fluent-Windows</p>

Fluent-Windows is available as an [npm package](https://www.npmjs.com/package/@fluent-windows/core).

## Install

```shell
// with npm
npm install @fluent-windows/core

// with yarn
yarn add @fluent-windows/core
```

Please note that [react](https://www.npmjs.com/package/react) >= 16.8.0 and [react-dom](https://www.npmjs.com/package/react-dom) >= 16.8.0 are peer dependencies.

## SVG Icons

In order to use prebuilt SVG Fluent icons, you must first install the `@fluent-windows/icons` package:

```shell
// with npm
npm install @fluent-windows/icons

// with yarn
yarn add @fluent-windows/icons
```

## CDN

Two Universal Module Definition (UMD) files are provided:

- one for development: https://unpkg.com/@fluent-windows/core@latest/umd/fluent-windows.development.js
- one for production: https://unpkg.com/@fluent-windows/core@latest/umd/fluent-windows.production.min.js

> ⚠️ Using this approach in production is discouraged though - the client has to download the entire library, regardless of which components are actually used, affecting performance and bandwidth utilization.
 
