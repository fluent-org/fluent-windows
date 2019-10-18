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

### 参考列表

以下每个功能都与[主题](/zh/getting-started/theme)有关联。

#### Space

```jsx
<Box m={2}>
  Tomato
</Box>
```

| Prop                  | CSS Property                       | Theme Field |
| --------------------- | ---------------------------------- | ----------- |
| `m`, `margin`         | `margin`                           | `space`     |
| `mt`, `marginTop`     | `margin-top`                       | `space`     |
| `mr`, `marginRight`   | `margin-right`                     | `space`     |
| `mb`, `marginBottom`  | `margin-bottom`                    | `space`     |
| `ml`, `marginLeft`    | `margin-left`                      | `space`     |
| `mx`                  | `margin-left` and `margin-right`   | `space`     |
| `my`                  | `margin-top` and `margin-bottom`   | `space`     |
| `p`, `padding`        | `padding`                          | `space`     |
| `pt`, `paddingTop`    | `padding-top`                      | `space`     |
| `pr`, `paddingRight`  | `padding-right`                    | `space`     |
| `pb`, `paddingBottom` | `padding-bottom`                   | `space`     |
| `pl`, `paddingLeft`   | `padding-left`                     | `space`     |
| `px`                  | `padding-left` and `padding-right` | `space`     |
| `py`                  | `padding-top` and `padding-bottom` | `space`     |

#### Color

```jsx
<Box color="primary.default" bg="#000">
  Header
</Box>
```

| Prop                    | CSS Property       | Theme Field |
| ----------------------- | ------------------ | ----------- |
| `color`                 | `color`            | `colors`    |
| `bg`, `backgroundColor` | `background-color` | `colors`    |
| `opacity`               | `opacity`          | none        |

#### Typography

```jsx
<Box fontFamily="Helvetica" fontSize={2}>
  Hello!
</Box>
```

| Prop            | CSS Property     | Theme Field      |
| --------------- | ---------------- | ---------------- |
| `fontFamily`    | `font-family`    | `fonts`          |
| `fontSize`      | `font-size`      | `fontSizes`      |
| `fontWeight`    | `font-weight`    | `fontWeights`    |
| `lineHeight`    | `line-height`    | `lineHeights`    |
| `letterSpacing` | `letter-spacing` | `letterSpacings` |
| `textAlign`     | `text-align`     | none             |
| `fontStyle`     | `font-style`     | none             |

#### Layout

```jsx
<Box width="100%" height={32} overflow="hidden" />
```

| Prop            | CSS Property     | Theme Field |
| --------------- | ---------------- | ----------- |
| `width`         | `width`          | `sizes`     |
| `height`        | `height`         | `sizes`     |
| `minWidth`      | `min-width`      | `sizes`     |
| `maxWidth`      | `max-width`      | `sizes`     |
| `minHeight`     | `min-height`     | `sizes`     |
| `maxHeight`     | `max-height`     | `sizes`     |
| `size`          | `width` `height` | `sizes`     |
| `display`       | `display`        | none        |
| `verticalAlign` | `vertical-align` | none        |
| `overflow`      | `overflow`       | none        |
| `overflowX`     | `overflowX`      | none        |
| `overflowY`     | `overflowY`      | none        |

#### Background

```jsx
<Box
  backgroundImage="url('/images/dog.png')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
/>
```

| Prop                 | CSS Property          | Theme Field |
| -------------------- | --------------------- | ----------- |
| `background`         | `background`          | none        |
| `backgroundImage`    | `background-image`    | none        |
| `backgroundSize`     | `background-size`     | none        |
| `backgroundPosition` | `background-position` | none        |
| `backgroundRepeat`   | `background-repeat`   | none        |

#### Border

```jsx
<Box border={1} borderRadius={2}>
  Card
</Box>
```

| Prop                      | CSS Property                   | Theme Field    |
| ------------------------- | ------------------------------ | -------------- |
| `border`                  | `border`                       | `borders`      |
| `borderWidth`             | `border-width`                 | `borderWidths` |
| `borderStyle`             | `border-style`                 | `borderStyles` |
| `borderColor`             | `border-color`                 | `colors`       |
| `borderRadius`            | `border-radius`                | `radii`        |
| `borderTop`               | `border-top`                   | `borders`      |
| `borderTopWidth`          | `border-top-width`             | `borderWidths` |
| `borderTopStyle`          | `border-top-style`             | `borderStyles` |
| `borderTopColor`          | `border-top-color`             | `colors`       |
| `borderTopLeftRadius`     | `border-top-left-radius`       | `radii`        |
| `borderTopRightRadius`    | `border-top-right-radius`      | `radii`        |
| `borderRight`             | `border-right`                 | `borders`      |
| `borderRightWidth`        | `border-right-width`           | `borderWidths` |
| `borderRightStyle`        | `border-right-style`           | `borderStyles` |
| `borderRightColor`        | `border-right-color`           | `colors`       |
| `borderBottom`            | `border-bottom`                | `borders`      |
| `borderBottomWidth`       | `border-bottom-width`          | `borderWidths` |
| `borderBottomStyle`       | `border-bottom-style`          | `borderStyles` |
| `borderBottomColor`       | `border-bottom-color`          | `colors`       |
| `borderBottomLeftRadius`  | `border-bottom-left-radius`    | `radii`        |
| `borderBottomRightRadius` | `border-bottom-right-radius`   | `radii`        |
| `borderLeft`              | `border-left`                  | `borders`      |
| `borderLeftWidth`         | `border-left-width`            | `borderWidths` |
| `borderLeftStyle`         | `border-left-style`            | `borderStyles` |
| `borderLeftColor`         | `border-left-color`            | `colors`       |
| `borderX`                 | `border-left` & `border-right` | `borders`      |
| `borderY`                 | `border-top` & `border-bottom` | `borders`      |

#### Position

```jsx
<Box position="absolute" top={0} left={0} right={0} bottom={0}>
  Cover
</Box>
```

| Prop       | CSS Property | Theme Field |
| ---------- | ------------ | ----------- |
| `position` | `position`   | none        |
| `zIndex`   | `z-index`    | `zIndices`  |
| `top`      | `top`        | `space`     |
| `right`    | `right`      | `space`     |
| `bottom`   | `bottom`     | `space`     |
| `left`     | `left`       | `space`     |

#### Shadow

```jsx
<Box textShadow="2px 2px #ff0000" boxShadow="5px 10px #888888">
  Text with shadows
</Box>
```

| Prop         | CSS Property  | Theme Field |
| ------------ | ------------- | ----------- |
| `textShadow` | `text-shadow` | `shadows`   |
| `boxShadow`  | `box-shadow`  | `shadows`   |

`Box` 是基于 [styled-system](https://styled-system.com/) 的, 所以你可以使用这些 [responsive apis](https://styled-system.com/table).
