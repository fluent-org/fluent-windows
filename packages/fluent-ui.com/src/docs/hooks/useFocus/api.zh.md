---
title: useFocus（订阅焦点事件）
hooks: useFocus
api: true
langKey: "zh"
---

## API

```
import useFocus from '@fluent-ui/hooks/useFocus'
// or
import { useFocus } from '@fluent-ui/hooks'
```

### useFocus 参数

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
