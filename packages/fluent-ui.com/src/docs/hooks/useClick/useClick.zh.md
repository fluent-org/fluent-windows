---
title: useClick（订阅点击事件）
hooks: useClick
type: hooks
langKey: "zh"
order: 2
---

# useClick

<p class="description">订阅基于 `onMouseUp` 的鼠标点击事件。</p>

## 例子

```tsx
import { useClick } from '@fluent-ui/hooks'

function handleChange() {
  // ...
}
const [status, bind, setStatus] = useClick(handleChange)

<div {...bind}>{status}</div>
```
