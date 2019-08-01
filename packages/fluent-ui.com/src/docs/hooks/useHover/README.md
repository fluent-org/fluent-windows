---
title: useHover
hooks: useHover
type: hooks
---

# useHover

<p class="description">Subscribe to focus events based on `onMouseEnter`, `onMouseLeave`.</p>

## Demo

```tsx
import { useHover } from '@fluent-ui/hooks'

function handleChange() {
  // ...
}
const [status, bind] = useHover(handleChange)

<button {...bind}>{status}</button>
```
