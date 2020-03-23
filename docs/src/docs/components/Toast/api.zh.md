---
title: Toast（消息条）
components: Toast
api: true
langKey: "zh"
---

## API

```
import Toast from '@fluent-windows/core/Toast'
// or
import { Toast } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | React.ReactChild |  | `Toast` 的内容。 |
| visible | boolean | false | 如果 `true`, `Toast` 会被展示。 |
| actions | React.ReactElement &or; React.ReactElement[] |  | 要显示的操作内容。 |
| placement | 'top-start' &or; 'top' &or; 'top-end' &or; 'bottom-end' &or; 'bottom' &or; 'bottom-start' &or; 'center' | 'top' | `Toast` 渲染的位置。 |
