---
title: useHover
hooks: useHover
api: true
langKey: "en"
---

## API

```
import useHover from '@fluent-windows/hooks/useHover'
// or
import { useHover } from '@fluent-windows/hooks'
```

### useHover parameter

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
