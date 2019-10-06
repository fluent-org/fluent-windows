---
title: Toast
components: Toast
api: true
langKey: "en"
---

## API

```
import Toast from '@fluent-ui/core/Toast'
// or
import { Toast } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | React.ReactChild |  | The content of the `Toast`. |
| visible | boolean | false | If `true`, the `Toast` is shown. |
| actions | React.ReactElement &or; React.ReactElement[] |  | The action to display. |
| placement | 'top-start' &or; 'top' &or; 'top-end' &or; 'bottom-end' &or; 'bottom' &or; 'bottom-start' &or; 'center' | 'top' | The placement of the `Toast`. |
