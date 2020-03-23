---
title: useFocus
hooks: useFocus
api: true
langKey: "en"
---

## API

```
import useFocus from '@fluent-windows/hooks/useFocus'
// or
import { useFocus } from '@fluent-windows/hooks'
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
