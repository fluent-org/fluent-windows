---
title: useClick（订阅点击事件）
hooks: useClick
api: true
langKey: "zh"
---

## API

```
import useClick from '@fluent-ui/hooks/useClick'
// or
import { useClick } from '@fluent-ui/hooks'
```

### useClick 参数

```ts
useClick(
  statusHandler?: (status: boolean) => void
): [
  isClicked: boolean,
  bind: { onMouseUp: () => void },
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
]
```
