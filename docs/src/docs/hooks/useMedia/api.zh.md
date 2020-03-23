---
title: useMedia（跟踪 CSS 媒体查询）
hooks: useMedia
api: true
langKey: "zh"
---

## API

```
import useMedia from '@fluent-windows/hooks/useMedia'
// or
import { useMedia } from '@fluent-windows/hooks'
```

### useMedia 参数

```ts
const defaultBreakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

useMedia(
  mediaQuery: MediaQuery,
  option: Option = { breakpoints: defaultBreakpoints }
): boolean
```
