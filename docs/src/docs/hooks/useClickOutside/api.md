---
title: useClickOutside
hooks: useClickOutside
api: true
langKey: "en"
---

## API

```
import useClickOutside from '@fluent-windows/hooks/useClickOutside'
// or
import { useClickOutside } from '@fluent-windows/hooks'
```

### useClickOutside parameter

```ts
useClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: (e: MouseEvent | TouchEvent) => void
): void
```
