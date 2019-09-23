---
title: useClickOutside（订阅点击外部事件）
hooks: useClickOutside
api: true
langKey: "zh"
---

## API

```
import useClickOutside from '@fluent-ui/hooks/useClickOutside'
// or
import { useClickOutside } from '@fluent-ui/hooks'
```

### useClickOutside 参数

```ts
useClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: (e: MouseEvent | TouchEvent) => void
): void
```
