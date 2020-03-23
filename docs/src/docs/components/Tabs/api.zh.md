---
title: Tabs（选项卡）
components: Tabs
api: true
langKey: "zh"
---

## API

```
import Tabs from '@fluent-windows/core/Tabs'
// or
import { Tabs } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | React.ReactText |  | 当前选中的 `Item`。 |
| onChange | (value: React.ReactText) => void |  | `Item` 选中状态改变时的回调。 |
| children&nbsp;* | React.ReactElement &or; React.ReactElement[] |  | `Tabs` 的内容。 |

### PanelProps

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | React.ReactText |  | 唯一标识。 |
| title | React.ReactChild |  | 选项卡头部位展示的标题文字。 |
| children | React.ReactElement &or; React.ReactElement[] |  | 文本和其他内容的显示部分。 |

`Tabs` 基于 `Box`, 所以你可以使用 `Box` 的所有特性。
