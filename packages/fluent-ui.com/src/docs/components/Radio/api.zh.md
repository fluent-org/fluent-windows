---
title: Radio（单选框）
components: Radio
api: true
langKey: "en"
---

## API

```
import Radio from '@fluent-ui/core/Radio'
// or
import { Radio } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| checked | boolean | false | 如果 `true`, `Radio` 会被选中。 |
| value | string |  | `Radio` 的唯一标识。 |
| onChange | (checked: boolean) => void |  | `Radio` 选中状态变化时的回调。 |
| disabled | boolean | false | 如果 `true`, `Radio` 会被禁用。 |
