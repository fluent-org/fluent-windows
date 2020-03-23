---
title: 最小化打包大小
type: getting-started
langKey: "zh"
order: 4
---

# 最小化打包大小

<p class="description">了解有关减少打包文件大小的信息。</p>

## 如何减少打包文件的体积

通常我将通过以下方式引入组件：

```js
import { Button, Input } from '@fluent-windows/core';
```

毫无疑问这样做很方便, 但是存在一些问题:

- 开发包将包含完整的库，这可能会导致启动时间变慢。
- 只有生产包支持 `tree-shaking`，才能按需导入。

如果这对您来说是个问题，则可以有多种选择：

### 选项 1

您可以使用路径导入来避免引入未使用的模块。例如：

```js
import { Button, Input } from '@fluent-windows/core';
```

使用以下代替：

```js
import Button from '@fluent-windows/core/Button';
import Input from '@fluent-windows/core/Input';
```

### 选项 2

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 配合以下配置：

```shell
yarn add -D babel-plugin-import
```

在你的项目根目录创建 `.babelrc.js` 文件：

```js
const plugins = [
  [
    'babel-plugin-import',
    {
      libraryName: '@fluent-windows/core',
      libraryDirectory: 'es',
      camel2DashComponentName: false
    },
    'core'
  ],
  [
    'babel-plugin-import',
    {
      libraryName: '@fluent-windows/icons',
      libraryDirectory: 'es',
      camel2DashComponentName: false
    },
    'icons'
  ]
];

module.exports = { plugins };
```

现在，您可以使用以下方法引入组件：

```git
- import Button from '@fluent-windows/core/Button';
- import Input from '@fluent-windows/core/Input';
+ import { Button, Input } from '@fluent-windows/core';
```
