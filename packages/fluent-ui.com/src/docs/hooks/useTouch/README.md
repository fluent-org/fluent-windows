---
title: useTouch
hooks: useTouch
type: hooks
---

# useTouch

<p class="description">Subscribe to focus events based on `onTouchStart`, `onTouchEnd`.</p>

## Demo

```tsx
import { useTouch } from '@fluent-ui/hooks'

function handleChange() {
  // ...
}
const [status, bind] = useTouch(handleChange)

<button {...bind}>{status}</button>
```
