---
title: useHover（订阅悬停事件）
hooks: useHover
api: true
langKey: "zh"
---

## API

```
import useHover from '@fluent-windows/hooks/useHover'
// or
import { useHover } from '@fluent-windows/hooks'
```

### useHover 参数

```ts
useHover(
  statusHandler?: (status: boolean) => void
): [
  isHovered: boolean,
  bind: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }
]
```
