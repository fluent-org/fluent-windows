---
title: Tooltip（提示框）
components: Tooltip
api: true
langKey: "zh"
---

## API

```
import Tooltip from '@fluent-ui/core/Tooltip'
// or
import { Tooltip } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | React.ReactElement |  | `Tooltip` 的内容。 |
| title&nbsp;* | React.ReactElement |  | `Tooltip` 的标题。 |
| visible | boolean |  | 如果 `true`, `Tooltip` 会被展示。 |
| onChange | (visible: boolean) => void |  | `Tooltip` 显示状态发生变化时的回调。 |
| trigger | 'hover' &or; 'click' &or; 'touch' &or; 'focus' | 'hover' | 触发方式。 |
| placement | 'auto-start' &or; 'auto' &or; 'auto-end' &or; 'top-start' &or; 'top' &or; 'top-end' &or; 'right-start' &or; 'right' &or; 'right-end' &or; 'bottom-end' &or; 'bottom' &or; 'bottom-start' &or; 'left-end' &or; 'left' &or; 'left-start' | 'bottom' | `Tooltip` 的渲染位置 |

`Tooltip` 基于 [`Popper.js`](https://popper.js.org), 所以支持更多 [Popper.js 的特性](https://popper.js.org/popper-documentation.html#Popper.Defaults)
