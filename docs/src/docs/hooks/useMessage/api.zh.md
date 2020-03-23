---
title: useMessage（函数式调用信息组件）
hooks: useMessage
api: true
langKey: "zh"
---

## API

```
import useMessage from '@fluent-windows/hooks/useMessage'
// or
import { useMessage } from '@fluent-windows/hooks'
```

### useMessage 参数

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

