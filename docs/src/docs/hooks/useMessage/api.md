---
title: useMessage
hooks: useMessage
api: true
langKey: "en"
---

## API

```
import useMessage from '@fluent-windows/hooks/useMessage'
// or
import { useMessage } from '@fluent-windows/hooks'
```

### useMessage parameter

```ts
useMessage(
  functionContainer: (
    visible: boolean,
    content: React.ReactChild,
    close: Close
  ) => React.ReactElement,
  duration: number = 3000
): [
  handleOpen: (content: React.ReactChild) => void,
  handleClose: () => void
]
```

