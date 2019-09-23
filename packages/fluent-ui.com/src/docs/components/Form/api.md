---
title: Form
components: Form
api: true
langKey: "en"
---

## API

```
import Form from '@fluent-ui/core/Form'
// or
import { Form } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | React.ReactElement &or; React.ReactElement[] |  | The content of the `Form`. |
| prefix | React.ReactChild |  | Content displayed before form. |
| suffix | React.ReactChild |  | Content displayed after form. |
| initialState | object |  | Initialize the displayed data. |
| onSubmit&nbsp;* | (value: object, errors?: object) => void |  | Callback for submit event. |

### Field Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | React.ReactElement |  | The content of the `Field`. |
| onChange | (value: any) => void |  | The callback of the form component content changes. |
| label | string |  | Field label. |
| name&nbsp;* | string |  | Unique identifier of the `Field` component. |
| rules | ValidationRule[] |  | Rules of verification, see below. |

#### ValidationRule

| param | Type | Default | Description |
| --- | --- | --- | --- |
| message | React.ReactNode |  | validation error message. |
| type | React.ReactNode | 'string' | built-in validation type, available options: https://github.com/yiminghe/async-validator#type. |
| required | boolean |  | indicates whether field is required. |
| whitespace | boolean |  | treat required fields that only contain whitespace as errors. |
| len | number |  | validate the exact length of a field. |
| min | number |  | validate the min length of a field. |
| max | number |  | validate the max length of a field. |
| enum | string &or; string[] |  | validate the value from a list of possible values. |
| pattern | RegExp |  | validate from a regular expression. |
| transform | (value: any) => any |  | transform a value before validation. |
| validator | (rule: any, value: any, callback: any, source?: any, options?: any) => any |  | custom validate function (Note: callback must be called). |

The verification function is based on [async-validator](https://github.com/yiminghe/async-validator).
