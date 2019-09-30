---
title: useTouch（订阅 touch 事件）
hooks: useTouch
type: hooks
langKey: "zh"
order: 11
---

# useTouch

<p class="description">订阅基于 `onTouchStart` `onTouchEnd` 的焦点事件。</p>

## 例子

```tsx
import { useTouch } from '@fluent-ui/hooks'

function handleChange() {
  // ...
}
const [status, bind] = useTouch(handleChange)

<button {...bind}>{status}</button>
```
