<p align="center">
  <a href="https://fluent-ui.com/" target="_blank">
    <img width="150" src="https://fluent-ui.com/fluent-ui.svg" alt="Fluent-UI logo">
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

function App() {
  return (
    <Button variant="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
