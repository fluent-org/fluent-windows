---
title: useClick
hooks: useClick
type: hooks
---

# useClick

<p class="description">Subscribe to mouse click events based on `onMouseUp`.</p>

## Demo

```tsx
import { useClick } from '@fluent-ui/hooks'

function handleChange() {
  // ...
}
const [status, bind, setStatus] = useClick(handleChange)

<div {...bind}>{status}</div>
```
