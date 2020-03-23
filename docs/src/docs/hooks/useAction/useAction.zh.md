---
title: useAction（全局事件通信）
hooks: useAction
type: hooks
langKey: "zh"
order: 1
---

# useAction

<p class="description">EventBus hooks，可以用于全局范围内的事件通信。</p>

## 例子

```tsx
import { useAction, useDispatch } from '@fluent-windows/hooks'
// parent
useAction(
  'navigation/active',
  payload => {
    // ...
  },
  []
)

// children
const dispatch = useDispatch({ type: 'navigation/active', payload: 'xxx' })
function handleClick() {
  dispatch()
}
<button onClick={handleClick}>child</button>
```
