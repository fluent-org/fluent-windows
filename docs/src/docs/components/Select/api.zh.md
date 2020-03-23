---
title: Select（选择框）
components: Select
api: true
langKey: "zh"
---

## API

```
import Select from '@fluent-windows/core/Select'
// or
import { Select } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | string &or; number |  | 当前选择的内容。 |
| onChange | (value: string &or; number) => void |  | `Select` 选择状态变化时的回调。 |
| disabled | boolean | false | 如果 `true`, `Select` 将会禁用。 |
| children | React.ReactElement &or; React.ReactElement[] |  | `Select` 的选项内容。 |
