---
title: useTouch（订阅 touch 事件）
hooks: useTouch
api: true
langKey: "zh"
---

## API

```
import useTouch from '@fluent-ui/hooks/useTouch'
// or
import { useTouch } from '@fluent-ui/hooks'
```

### useTouch 参数

```ts
useTouch(
  statusHandler?: (status: boolean) => void
): [
  isTouched: boolean,
  bind: {
    onTouchStart: () => void;
    onTouchEnd: () => void;
  }
]
```
