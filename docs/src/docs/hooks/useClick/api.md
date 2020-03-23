---
title: useClick
hooks: useClick
api: true
langKey: "en"
---

## API

```
import useClick from '@fluent-windows/hooks/useClick'
// or
import { useClick } from '@fluent-windows/hooks'
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
