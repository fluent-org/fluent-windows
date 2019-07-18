---
title: Tooltip
components: Tooltip
api: true
---

## API

```
import Tooltip from '@fluent-ui/core/Tooltip'
// or
import { Tooltip } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | React.ReactElement |  | Tooltip reference element. |
| title&nbsp;* | React.ReactElement |  | Tooltip title. |
| visible | boolean |  | 	If `true`, the tooltip is shown. |
| onChange | (visible: boolean) => void |  | Callback fired when the tooltip requests to be change. |
| trigger | 'hover' &or; 'click' &or; 'touch' &or; 'focus' | 'hover' | Tooltip trigger mode. |
| placement | 'auto-start' &or; 'auto' &or; 'auto-end' &or; 'top-start' &or; 'top' &or; 'top-end' &or; 'right-start' &or; 'right' &or; 'right-end' &or; 'bottom-end' &or; 'bottom' &or; 'bottom-start' &or; 'left-end' &or; 'left' &or; 'left-start' | 'bottom' | The position of the tooltip relative to the target. |

`Tooltip` based on [`Popper.js`](https://popper.js.org), so it also supports more [Popper.js features](https://popper.js.org/popper-documentation.html#Popper.Defaults)
