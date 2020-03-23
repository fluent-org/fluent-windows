---
title: Typography
components: Typography
api: true
langKey: "en"
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
| children | React.ReactNode |  | The content of the `Typography`. |
| variant | 'h1' &or; 'h2' &or; 'h3' &or; 'h4' &or; 'h5' &or; 'h6' &or; 'subtitle1' &or; 'subtitle2' &or; 'body1' &or; 'body2' | 'body1' | Applies the theme typography styles. |
| variantMapping | { h1: keyof JSX.IntrinsicElements, h2: keyof JSX.IntrinsicElements, h3: keyof JSX.IntrinsicElements, h4: keyof JSX.IntrinsicElements, h5: keyof JSX.IntrinsicElements, h6: keyof JSX.IntrinsicElements, subtitle1: keyof JSX.IntrinsicElements, subtitle2: keyof JSX.IntrinsicElements, body1: keyof JSX.IntrinsicElements, body2: keyof JSX.IntrinsicElements } | { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', subtitle1: 'h6', subtitle2: 'h6', body1: 'p', body2: 'p' } | We are empirically mapping the variant property to a range of different DOM element types. For instance, subtitle1 to `<h6>`. If you wish to change that mapping, you can provide your own. Alternatively, you can use the `as` property, `as` higher priority than `variant`. |
| gutterTop | boolean | false | If `true`, the text will have a top margin. |
| gutterBottom | boolean | false | If `true`, the text will have a bottom margin. |
| noWrap | boolean | false | If `true`, the text will not wrap, but instead will truncate with an ellipsis. |

`Typography` extends from Box, so you can use all the features of Box
