---
title: usePopper
hooks: usePopper
api: true
---

## API

```
import usePopper from '@fluent-ui/hooks/usePopper'
// or
import { usePopper } from '@fluent-ui/hooks'
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
