---
title: useAction
hooks: useAction
api: true
langKey: "en"
---

## API

```
import { useAction, useDispatch } from '@fluent-windows/hooks/useAction'
// or
import { useAction, useDispatch } from '@fluent-windows/hooks'
```

### useAction parameter

```ts
useAction(
  type: string | object,
  callback: (payload: any) => any,
  deps: (string | number | null | undefined | boolean)[] | [] = []
)
```

### useDispatch parameter

```ts
useDispatch({ type: string | object, payload: any })
```
