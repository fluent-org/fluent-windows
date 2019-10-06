---
title: useAction（全局事件通信）
hooks: useAction
api: true
langKey: "zh"
---

## API

```
import useAction from '@fluent-ui/hooks/useAction'
import useDispatch from '@fluent-ui/hooks/useDispatch'
// or
import { useAction, useDispatch } from '@fluent-ui/hooks'
```

### useAction 参数

```ts
useAction(
  type: string | object,
  callback: (payload: any) => any,
  deps: (string | number | null | undefined | boolean)[] | [] = []
)
```

### useDispatch 参数

```ts
useDispatch({ type: string | object, payload: any })
```
