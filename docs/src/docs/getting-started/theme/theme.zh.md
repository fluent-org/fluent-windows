---
title: theme（主题）
type: getting-started
langKey: "zh"
order: 3
---

# 主题

<p class="description">基于 [`styled-system`](https://styled-system.com/) 的主题系统.</p>

## 默认主题

<ThemeTemplate />

## 自定义

你可以通过为 `ThemeProvider` 传入 `theme` 属性来改变 **默认主题**

```jsx
import ThemeProvider from '@fluent-ui/core/ThemeProvider';

const theme = {
  colors: {
    primary: {
      default: '#006666'
    }
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="primary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}
```

以下是 Typescript 版本的用法：

```tsx
import * as React from 'react';
import ThemeProvider from '@fluent-ui/core/ThemeProvider';
import { Theme } from '@fluent-ui/core'

const theme: Theme = {
  colors: {
    primary: {
      default: '#006666'
    }
  }
}

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="primary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}
```
