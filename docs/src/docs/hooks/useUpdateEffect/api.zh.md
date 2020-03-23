---
title: useUpdateEffect（componentDidUpdate）
hooks: useUpdateEffect
api: true
langKey: "zh"
---

## API

```
import useUpdateEffect from '@fluent-windows/hooks/useUpdateEffect'
// or
import { useUpdateEffect } from '@fluent-windows/hooks'
```

### useUpdateEffect 参数

```ts
useUpdateEffect(
  effect: () => void | (() => void | undefined),
  deps: any[]
): void
```
