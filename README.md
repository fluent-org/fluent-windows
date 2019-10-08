<p align="center">
  <a href="https://fluent-ui.com/" target="_blank">
    <img width="150" src="https://fluent-ui.com/images/fluent-ui.svg" alt="Fluent-UI logo">
  </a>
</p>

<p align="center">
  <a href="https://fluent-ui.com/" rel="noopener" target="_blank">
    <h1 align="center">Fluent-UI</h1>
  </a>
</p>

<div align="center">

[React](https://reactjs.org/) components that inspired by [Microsoft's Fluent Design System](https://www.microsoft.com/design/fluent/).

[![npm](https://img.shields.io/npm/v/@fluent-ui/core.svg?style=flat-square)](https://www.npmjs.com/package/@fluent-ui/core)
[![CircleCI](https://img.shields.io/circleci/build/github/fluent-org/fluent-ui/master.svg?style=flat-square)](https://circleci.com/gh/fluent-org/fluent-ui/tree/master)
[![codecov](https://img.shields.io/codecov/c/github/fluent-org/fluent-ui.svg?style=flat-square)](https://codecov.io/gh/fluent-org/fluent-ui)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/fluent-org/fluent-ui/blob/master/LICENSE)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lerna.js.org/)

</div>

English | [简体中文](https://github.com/fluent-org/fluent-ui/blob/master/README-zh_CN.md)

## Installation

Install the package in your project directory with:

```
// with npm
npm install @fluent-ui/core

// with yarn
yarn add @fluent-ui/core
```

## Usage

Here is a quick example to get you started.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@fluent-ui/core/Button';
import ThemeProvider from '@fluent-ui/core/ThemeProvider';

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

[![Edit basic-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/nervous-ellis-4e44e?fontsize=14)

## Documentation

Check out our [documentation website](https://fluent-ui.com).

## Changelog

Recently Updated? Please read the [changelog](https://github.com/fluent-org/fluent-ui/blob/master/CHANGELOG.md).

## Links

- [Fluent-UI-Icons](https://github.com/fluent-org/fluent-ui/blob/master/packages/fluent-ui-icons/README.md) - [demo/docs](https://fluent-ui.com/components/icon)
- [Fluent-UI-Hooks](https://github.com/fluent-org/fluent-ui/blob/master/packages/fluent-ui-hooks/README.md) - [demo/docs](https://fluent-ui.com/hooks/guide)
- [Fluent-UI-Styles](https://github.com/fluent-org/fluent-ui/blob/master/packages/fluent-ui-styles/README.md)

## License

This project is licensed under the terms of the [MIT license](https://github.com/fluent-org/fluent-ui/blob/master/LICENSE).
