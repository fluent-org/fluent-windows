---
title: Toggle（开关）
components: Toggle
api: true
langKey: "zh"
---

## API

```
import Toggle from '@fluent-ui/core/Toggle'
// or
import { Toggle } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| checked | boolean | false | 如果 `true`, `Toggle` 将会被选中 |
| value | string |  | `Toggle` 的唯一标识。 |
| onChange | (checked: boolean) => void |  | `Toggle` 选中状态改变时的回调。 |
| disabled | boolean | false | 如果 `true`, `Toggle` 将会被禁用。 |
