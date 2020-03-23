---
title: useFocus（订阅焦点事件）
hooks: useFocus
type: hooks
langKey: "zh"
order: 4
---

# useFocus

<p class="description">订阅基于 `onFocus` `onBlur` 的焦点事件。</p>

## 例子

```tsx
import { useFocus } from '@fluent-windows/hooks'

function handleChange() {
  // ...
}
const [status, bind] = useFocus(handleChange)

<button {...bind}>{status}</button>
```
