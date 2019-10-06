---
title: Dialog（对话框）
components: Dialog
api: true
langKey: "zh"
---

## API

```
import Dialog from '@fluent-ui/core/Dialog'
// or
import { Dialog } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | any[] |  | `Dialog` 的内容。 |
| visible&nbsp;* | boolean |  | 如果 `true`, `Dialog` 将会显示。 |
| onChange | (visible: boolean) => void |  | `Dialog` 显示状态改变时的回调。 |
