---
title: useHover
hooks: useHover
type: hooks
langKey: "en"
---

# useHover

<p class="description">Subscribe to hover events based on `onMouseEnter`, `onMouseLeave`.</p>

## Demo

```tsx
import { useHover } from '@fluent-ui/hooks'

function handleChange() {
  // ...
}
const [status, bind] = useHover(handleChange)

<button {...bind}>{status}</button>
```
