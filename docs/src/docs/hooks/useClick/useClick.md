---
title: useClick
hooks: useClick
type: hooks
langKey: "en"
order: 2
---

# useClick

<p class="description">Subscribe to mouse click events based on `onMouseUp`.</p>

## Demo

```tsx
import { useClick } from '@fluent-windows/hooks'

function handleChange() {
  // ...
}
const [status, bind, setStatus] = useClick(handleChange)

<div {...bind}>{status}</div>
```
