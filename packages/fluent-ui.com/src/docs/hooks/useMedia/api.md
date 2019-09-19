---
title: useMedia
hooks: useMedia
api: true
---

## API

```
import useMedia from '@fluent-ui/hooks/useMedia'
// or
import { useMedia } from '@fluent-ui/hooks'
```

### useMedia parameter

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
