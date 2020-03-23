---
title: usePopper
hooks: usePopper
api: true
langKey: "en"
---

## API

```
import usePopper from '@fluent-windows/hooks/usePopper'
// or
import { usePopper } from '@fluent-windows/hooks'
```

### usePopper parameter

```ts
usePopper<Reference, Popper>(
  placement = 'bottom',
  positionFixed = true,
  eventsEnabled = true,
  ...otherOptions
): [React.RefObject<Reference>, React.RefObject<Popper>] {
```
