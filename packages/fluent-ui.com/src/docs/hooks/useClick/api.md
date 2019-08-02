---
title: useClick
hooks: useClick
api: true
---

## API

```
import useClick from '@fluent-ui/hooks/useClick'
// or
import { useClick } from '@fluent-ui/hooks'
```

### useClick parameter

```ts
useClick(
  statusHandler?: (status: boolean) => void
): [
  isClicked: boolean,
  bind: { onMouseUp: () => void },
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
]
```
