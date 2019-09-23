---
title: usePopper（创建 popper）
hooks: usePopper
api: true
langKey: "zh"
---

## API

```
import usePopper from '@fluent-ui/hooks/usePopper'
// or
import { usePopper } from '@fluent-ui/hooks'
```

### usePopper 参数

```ts
usePopper<Reference, Popper>(
  placement = 'bottom',
  positionFixed = true,
  eventsEnabled = true,
  ...otherOptions
): [React.RefObject<Reference>, React.RefObject<Popper>] {
```
