---
title: Dialog
components: Dialog
api: true
langKey: "en"
---

## API

```
import Dialog from '@fluent-windows/core/Dialog'
// or
import { Dialog } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | any[] |  | The content of the `Dialog`. |
| visible&nbsp;* | boolean |  | 	If `true`, the `Dialog` is shown. |
| onChange | (visible: boolean) => void |  | Callback fired when the `Dialog` requests to be change. |
