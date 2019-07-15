---
title: Toggle
components: Toggle
api: true
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
| checked | boolean | false | 	If `true`, the `Toggle` is checked. |
| value | string |  | As the sole indication of `Toggle` |
| onChange | (checked: boolean) => void |  | Callback fired when the state is changed. |
| disabled | boolean | false | 	If `true`, the `Toggle` will be disabled. |
| children | React.ReactNode |  | Render as the label of `Toggle`. |