---
title: useClickOutside（订阅点击外部事件）
hooks: useClickOutside
type: hooks
langKey: "zh"
order: 3
---

# useClickOutside

<p class="description">订阅点击元素以外位置的事件。</p>

## 例子

```tsx
import { useClickOutside } from '@fluent-ui/hooks'

const reference = React.useRef(null)

useClickOutside(
  reference,
  (): void => {
    // ...
  }
)

<div ref={reference}>xxx</div>
```
