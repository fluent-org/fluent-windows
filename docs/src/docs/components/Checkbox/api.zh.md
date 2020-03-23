---
title: Checkbox（复选框）
components: Checkbox
api: true
langKey: "zh"
---

## API

```
import Checkbox from '@fluent-windows/core/Checkbox'
// or
import { Checkbox } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| checked | boolean | false | 如果 `true`, `Checkbox` 将被选中。 |
| value | string |  | 作为 `Checkbox` 的唯一标识 |
| onChange | (checked: boolean) => void |  | 选中状态改变时的回调。 |
| disabled | boolean | false | 	如果 `true`, `Checkbox` 会被禁用。 |
