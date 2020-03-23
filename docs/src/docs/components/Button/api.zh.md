---
title: Button（按钮）
components: Button
api: true
langKey: "zh"
---

## API

```
import Button from '@fluent-windows/core/Button'
// or
import { Button } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| variant | 'standard' &or; 'primary' | 'standard' | 要使用的变体。 |
| disabled | boolean |  | 如果 `true`, 将禁用 button。 |
| size | 'small' &or; 'medium' &or; 'large' | 'medium' | 按钮大小。 |
| block | boolean | false | 将使按钮适合其父元素的宽度。 |
| onClick | (event) => void |  | 按钮的点击事件。 |
| children&nbsp;* | React.ReactNode |  | 按钮内容。 |
| as | string |  | 如果你想要改变组件最终呈现的 HTML 标签，可以使用 `as` 做到这一点。 |
| href | string |  | 如果 `as` 属性为 "a", 使用 href 来设置 a 标签的 href 指向。 |
| ghost | boolean |  | 使背景变透明。 |
| rounded | boolean |  | 弧形按钮。 |
