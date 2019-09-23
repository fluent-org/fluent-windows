---
title: Form（表单）
components: Form
api: true
langKey: "zh"
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
| children&nbsp;* | React.ReactElement &or; React.ReactElement[] |  | `Form` 的内容。 |
| prefix | React.ReactChild |  | `Form` 的前缀内容。 |
| suffix | React.ReactChild |  | `Form` 的后缀内容。 |
| initialState | object |  | 初始化的数据。 |
| onSubmit&nbsp;* | (value: object, errors?: object) => void |  | `submit` 事件的回调。 |

### Field Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | React.ReactElement |  | `Field` 的内容。 |
| onChange | (value: any) => void |  | 子组件状态变化时的回调。 |
| label | string |  | 子组件的 label。 |
| name&nbsp;* | string |  | 子组件的唯一标识。 |
| rules | ValidationRule[] |  | 校验规则，见下表。 |

#### ValidationRule

| param | Type | Default | Description |
| --- | --- | --- | --- |
| message | React.ReactNode |  | 校验出现错误时的提示信息。 |
| type | React.ReactNode | 'string' | 内置的验证类型, 可选项: https://github.com/yiminghe/async-validator#type. |
| required | boolean |  | 指示是否为必填。 |
| whitespace | boolean |  | 将只包含空格的必填字段视为错误。 |
| len | number |  | 验证字段的长度。 |
| min | number |  | 验证字段的最小长度。 |
| max | number |  | 验证字段的最大长度。 |
| enum | string &or; string[] |  | 从可能的值列表中验证该值。 |
| pattern | RegExp |  | 正则表达式验证。 |
| transform | (value: any) => any |  | 在验证之前转换值。 |
| validator | (rule: any, value: any, callback: any, source?: any, options?: any) => any |  | 自定义验证函数 (注意: 必须调用回调)。 |

验证函数基于 [async-validator](https://github.com/yiminghe/async-validator)。
