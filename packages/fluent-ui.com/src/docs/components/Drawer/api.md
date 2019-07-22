---
title: Drawer
components: Drawer
api: true
---

## API

```
import Drawer from '@fluent-ui/core/Drawer'
// or
import { Drawer } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | React.ReactElement |  | Drawer reference element. |
| visible&nbsp;* | boolean |  | 	If `true`, the `Drawer` is shown. |
| onChange | (visible: boolean) => void |  | Callback fired when the `Drawer` requests to be change. |
| anchor | 'left' &or; 'top' &or; 'right' &or; 'bottom' | 'left' | Drawer anchor mode. |
