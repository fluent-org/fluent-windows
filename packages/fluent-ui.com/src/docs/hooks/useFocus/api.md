---
title: useFocus
hooks: useFocus
api: true
---

## API

```
import useFocus from '@fluent-ui/hooks/useFocus'
// or
import { useFocus } from '@fluent-ui/hooks'
```

### useFocus parameter

```ts
useFocus(
  statusHandler?: (status: boolean) => void
): [
  isFocused: boolean,
  bind: {
    onFocus: () => void;
    onBlur: () => void;
  }
]
```
