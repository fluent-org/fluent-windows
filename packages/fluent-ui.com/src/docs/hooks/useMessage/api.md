---
title: useMessage
hooks: useMessage
api: true
---

## API

```
import useMessage from '@fluent-ui/hooks/useMessage'
// or
import { useMessage } from '@fluent-ui/hooks'
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
