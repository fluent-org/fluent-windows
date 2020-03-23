---
title: Input
components: Input
api: true
langKey: "en"
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
| value | string |  | The value of the `input` element, required for a controlled component. |
| onChange | (value: string) => void |  | Callback fired when the value is changed. |
| placeholder | string |  | The short hint displayed in the input before the user enters a value. |
| disabled | boolean |  | If `true`, the `input` element will be disabled. |
| cleared | boolean | false | Whether to display a button to clear the value of the `input` element |
| password | boolean |  | The `input` element will be rendered as `<input type="password" />` |
| error | boolean |  | 	If `true`, the `input` will indicate an error. |
| suffix | React.ReactNode | null | Rear content input box. |
| ghost | boolean |  | Ghost button, background transparent. |

#### Input.TextArea

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | string |  | The value of the `input` element, required for a controlled component. |
| onChange | (value: string) => void |  | Callback fired when the value is changed. |
| placeholder | string |  | The short hint displayed in the input before the user enters a value. |
| disabled | boolean |  | If `true`, the `input` element will be disabled. |
| error | boolean |  | 	If `true`, the `input` will indicate an error. |
| ghost | boolean |  | Ghost button, background transparent. |
| resize | 'none' &or; 'both' &or; 'horizontal' &or; 'vertical' &or; 'block' &or; 'inline' | 'both' | The `resize` prop sets whether an `TextArea` is resizable, and if so, in which directions. |
