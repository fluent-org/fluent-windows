---
title: Navigation（导航）
components: Navigation
api: true
langKey: "zh"
---

## API

```
import Navigation from '@fluent-windows/core/Navigation'
// or
import { Navigation } from '@fluent-windows/core'
```

在 Navigation 内使用 `Navigation.Header` `Navigation.Footer` 来使目标渲染到指定位置。

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | any[] |  | `Navigation` 的内容。 |
| horizontal | boolean | false | 如果 `true`, `Navigation` 将变为水平样式。 |
| expanded | boolean | true | 如果 `false`, `Navigation` 将变为紧凑样式。 |
| reveal | boolean | false | [Reveal](https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal) 是一种照明效果，当用户将指针移动到交互元素附近时，它会高亮显示交互元素。 |
| value | string &or; number |  | 当前被选中的 `Item`。 |
| onChange | (id: string &or; number) => void |  | `Item` 被转中时的回调。 |

`Navigation` 基于 `Box`, 所以你可以使用 `Box` 的所有特性。
