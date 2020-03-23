---
title: useAction
hooks: useAction
type: hooks
langKey: "en"
order: 1
---

# useAction

<p class="description">EventBus hooks, Can be used for event communication in a global scope.</p>

## Demo

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
