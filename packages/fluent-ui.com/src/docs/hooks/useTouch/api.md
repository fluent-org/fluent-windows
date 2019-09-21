---
title: useTouch
hooks: useTouch
api: true
langKey: "en"
---

## API

```
import useTouch from '@fluent-ui/hooks/useTouch'
// or
import { useTouch } from '@fluent-ui/hooks'
```

### useTouch parameter

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
