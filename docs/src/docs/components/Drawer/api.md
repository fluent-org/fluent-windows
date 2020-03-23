---
title: Drawer
components: Drawer
api: true
langKey: "en"
---

## API

```
import Drawer from '@fluent-windows/core/Drawer'
// or
import { Drawer } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | React.ReactElement |  | Drawer reference element. |
| visible&nbsp;* | boolean |  | 	If `true`, the `Drawer` is shown. |
| onChange | (visible: boolean) => void |  | Callback fired when the `Drawer` requests to be change. |
| anchor | 'left' &or; 'top' &or; 'right' &or; 'bottom' | 'left' | Drawer anchor mode. |
