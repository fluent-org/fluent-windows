---
title: Usage（使用）
type: getting-started
langKey: "zh"
order: 2
---

# 使用

<p class="description">开始使用 React 和 Fluent-Windows。</p>

## 快速入门

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

ReactDOM.render(<App />, document.querySelector('#app'));
```

**注意**: 你必须在根组件内用 `ThemeProvider` 包裹子组件，否则将会出现错误

## 标准化

Fluent-Windows 提供了一个可选的 `Normalize` 组件。 它可以统一各个浏览器设备 HTML 元素的样式。
它是基于 [normalize.css](https://github.com/necolas/normalize.css) 的。

```jsx
import ThemeProvider, { Normalize } from '@fluent-windows/core/ThemeProvider';

function Layout({ children }) {
  return (
    <ThemeProvider>
      <Normalize />
      {children}
    </ThemeProvider>
  );
}
```
