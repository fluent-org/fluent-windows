---
title: Minimizing Bundle Size
type: getting-started
langKey: "en"
order: 4
---

# Minimizing Bundle Size

<p class="description">Learn more about the tools you can leverage to reduce the bundle size.</p>

## How to reduce the bundle size

Usually I will import components in the following way:

```js
import { Button, Input } from '@fluent-windows/core';
```

There is no doubt that this is very convenient, but there are some problems:

- Development bundles will contain the full library which can lead to slower startup times.
- Only the production bundle supports `tree-shaking` to be imported on demand.

If this is an issue for you, you have various options:

### Option 1

You can use path imports to avoid pulling in unused modules. For instance, instead of:

```js
import { Button, Input } from '@fluent-windows/core';
```

use:

```js
import Button from '@fluent-windows/core/Button';
import Input from '@fluent-windows/core/Input';
```

### Option 2

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) with the following configuration:

```shell
yarn add -D babel-plugin-import
```

create a `.babelrc.js` file in the root directory of your project:

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

Now you can use the following import method:

```git
- import Button from '@fluent-windows/core/Button';
- import Input from '@fluent-windows/core/Input';
+ import { Button, Input } from '@fluent-windows/core';
```
