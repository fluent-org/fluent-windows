---
title: Portal（传送门）
components: Portal
api: true
langKey: "zh"
---

## API

```
import Portal from '@fluent-windows/core/Portal'
// or
import { Portal } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | React.ReactElement |  | 要渲染到 `container` 内的内容。 |
| container | Element &or; (() => Element) &or; null |  | 一个 node, 组件或函数. 将会把 `Portal` 的内容渲染到 `container` 中。默认情况下为 `document.body` |
| disablePortal | boolean | false | 如果 `true`，子元素会停留在它的父DOM层次结构中。 |
