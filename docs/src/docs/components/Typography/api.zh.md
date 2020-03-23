---
title: Typography（排版）
components: Typography
api: true
langKey: "zh"
---

## API

```
import Typography from '@fluent-windows/core/Typography'
// or
import { Typography } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | React.ReactNode |  | `Typography` 的内容。 |
| variant | 'h1' &or; 'h2' &or; 'h3' &or; 'h4' &or; 'h5' &or; 'h6' &or; 'subtitle1' &or; 'subtitle2' &or; 'body1' &or; 'body2' | 'body1' | 应用不同的排版样式。 |
| variantMapping | { h1: keyof JSX.IntrinsicElements, h2: keyof JSX.IntrinsicElements, h3: keyof JSX.IntrinsicElements, h4: keyof JSX.IntrinsicElements, h5: keyof JSX.IntrinsicElements, h6: keyof JSX.IntrinsicElements, subtitle1: keyof JSX.IntrinsicElements, subtitle2: keyof JSX.IntrinsicElements, body1: keyof JSX.IntrinsicElements, body2: keyof JSX.IntrinsicElements } | { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', subtitle1: 'h6', subtitle2: 'h6', body1: 'p', body2: 'p' } | `variant` 根据它映射到一系列不同的DOM元素类型。 例如，`subtitle1` 到 `<h6>`。 如果你想改变这种映射，你可以提供你自己的。 另外，您也可以使用 `as`，且 `as` 优先级高于 `variant`。 |
| gutterTop | boolean | false | 如果 `true`, 文字上方会有一段间隙。 |
| gutterBottom | boolean | false | 如果 `true`, 文字下方会有一段间隙。 |
| noWrap | boolean | false | 如果 `true`, 文本不会换行，而是会以省略号截断。 |

`Typography` 基于 `Box`, 所以你可以使用 `Box` 的所有特性。
