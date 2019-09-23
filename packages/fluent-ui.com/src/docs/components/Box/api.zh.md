---
title: Box（分组）
components: Box
api: true
langKey: "zh"
---

## API

```
import Box from '@fluent-ui/core/Box'
// or
import { Box } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| acrylic | boolean | false | [Acrylic](https://docs.microsoft.com/en-us/windows/uwp/design/style/acrylic) 用于创建半透明纹理。 你可以将 Acrylic 应用到应用图面中，并帮助构建视觉层次结构。 |
| children | React.ReactNode |  | Box 的内容。 |
| as | string |  | 如果你想要改变组件最终呈现的 HTML 标签，可以使用 `as` 做到这一点。 |

`Box` 是基于 [styled-system](https://styled-system.com/) 的, 所以你可以使用这些 [responsive apis](https://styled-system.com/table).

