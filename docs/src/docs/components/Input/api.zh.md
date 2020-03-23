---
title: Input（输入框）
components: Input
api: true
langKey: "zh"
---

## API

```
import Input from '@fluent-windows/core/Input'
// or
import { Input } from '@fluent-windows/core'
```

### Props

#### Input

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | string |  | 输入元素的值，受控组件必填。 |
| onChange | (value: string) => void |  | 输入框内容改变时的回调。 |
| placeholder | string |  | 在用户输入值之前在输入框中显示的简短提示。 |
| disabled | boolean |  | 如果 `true`, `input` 元素将被禁用。 |
| cleared | boolean | false | 是否显示一个按钮清除输入元素的值。 |
| password | boolean |  | `input` 元素将被渲染为 `<input type="password" />` |
| error | boolean |  | 	如果 `true`, `input` 将会表示为错误状态。 |
| suffix | React.ReactNode | null | 输入框的后置内容。 |
| ghost | boolean |  | 幽灵按钮，背景透明。 |

#### Input.TextArea

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | string |  | 输入元素的值，受控组件必填。 |
| onChange | (value: string) => void |  | 输入框内容改变时的回调。 |
| placeholder | string |  | 在用户输入值之前在输入框中显示的简短提示。 |
| disabled | boolean |  | 如果 `true`, `input` 元素将被禁用。 |
| error | boolean |  | 	如果 `true`, `input` 将会表示为错误状态。 |
| ghost | boolean |  | 幽灵按钮，背景透明。 |
| resize | 'none' &or; 'both' &or; 'horizontal' &or; 'vertical' &or; 'block' &or; 'inline' | 'both' | `resize` 属性允许你控制 `TextArea` 的可调整大小性。|
