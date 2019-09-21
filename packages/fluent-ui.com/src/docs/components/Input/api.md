---
title: Input
components: Input
api: true
langKey: "en"
---

## API

```
import Input from '@fluent-ui/core/Input'
// or
import { Input } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | string |  | The value of the `input` element, required for a controlled component. |
| onChange | (value: string) => void |  | Callback fired when the value is changed. |
| placeholder | string |  | The short hint displayed in the input before the user enters a value. |
| disabled | boolean |  | If `true`, the `input` element will be disabled. |
| cleared | boolean | false | Whether to display a button to clear the value of the `input` element |
| password | boolean |  | The `input` element will be rendered as `<input type="password" />` |
| error | boolean |  | 	If `true`, the `input` will indicate an error. |
