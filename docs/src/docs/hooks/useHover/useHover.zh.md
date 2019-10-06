---
title: useHover（订阅悬停事件）
hooks: useHover
type: hooks
langKey: "zh"
order: 6
---

# useHover

<p class="description">订阅基于 `onMouseEnter` `onMouseLeave` 的悬停事件。</p>

## 例子

```tsx
import { useHover } from '@fluent-ui/hooks'

function handleChange() {
  // ...
}
const [status, bind] = useHover(handleChange)

<button {...bind}>{status}</button>
```
