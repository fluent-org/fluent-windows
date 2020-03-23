---
title: Command（命令栏）
components: Command
api: true
langKey: "zh"
---

## API

```
import Command from '@fluent-windows/core/Command'
// or
import { Command } from '@fluent-windows/core'
```

在 Command 内使用 `Command.Content` `Command.Secondary` 来使目标渲染到指定位置。

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | any[] |  | `Command` 的内容 |
| reveal | boolean | false | [Reveal](https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal) 是一种照明效果，当用户将指针移动到交互元素附近时，它会高亮显示交互元素。 |

`Command` 基于 `Box`, 所以你可以使用 `Box` 的所有特性。
