<p align="center">
  <a href="https://fluent-windows.com/" target="_blank">
    <img width="150" src="https://fluent-windows.com/images/fluent-windows.svg" alt="Fluent-Windows logo">
  </a>
</p>

<p align="center">
  <a href="https://fluent-windows.com/" rel="noopener" target="_blank">
    <h1 align="center">Fluent-Windows</h1>
  </a>
</p>

<div align="center">

一套受 [Microsoft's Fluent Design System](https://www.microsoft.com/design/fluent/) 启发的 [React](https://reactjs.org/) 组件库。

[![npm](https://img.shields.io/npm/v/@fluent-windows/core.svg?style=flat-square)](https://www.npmjs.com/package/@fluent-windows/core)
[![CircleCI](https://img.shields.io/circleci/build/github/fluent-org/fluent-windows/master.svg?style=flat-square)](https://circleci.com/gh/fluent-org/fluent-windows/tree/master)
[![codecov](https://img.shields.io/codecov/c/github/fluent-org/fluent-windows.svg?style=flat-square)](https://codecov.io/gh/fluent-org/fluent-windows)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/fluent-org/fluent-windows/blob/master/LICENSE)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lerna.js.org/)

</div>

[English](https://github.com/fluent-org/fluent-windows/blob/master/README.md) | 简体中文

## 安装

使用以下命令安装在项目目录中：

```
// with npm
npm install @fluent-windows/core

// with yarn
yarn add @fluent-windows/core
```

## 用法

这是一个快速入门的示例。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@fluent-windows/core/Button';
import ThemeProvider from '@fluent-windows/core/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
```

[![Edit basic-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/basic-demo-l79to)

## 文档

查看我们的[文档网站](https://fluent-windows.com)。

## 更新日志

查看最近更新的内容请看 [changelog](https://github.com/fluent-org/fluent-windows/blob/master/CHANGELOG.md).

## 链接

- [Fluent-Windows-Icons](https://github.com/fluent-org/fluent-windows/blob/master/packages/fluent-windows-icons/README.md) - [示例/文档](https://fluent-windows.com/components/icon)
- [Fluent-Windows-Hooks](https://github.com/fluent-org/fluent-windows/blob/master/packages/fluent-windows-hooks/README.md) - [示例/文档](https://fluent-windows.com/hooks/guide)
- [Fluent-Windows-Styles](https://github.com/fluent-org/fluent-windows/blob/master/packages/fluent-windows-styles/README.md)

## License

该项目遵循 [MIT license](https://github.com/fluent-org/fluent-windows/blob/master/LICENSE).
