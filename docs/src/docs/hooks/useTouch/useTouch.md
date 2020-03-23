---
title: useTouch
hooks: useTouch
type: hooks
langKey: "en"
order: 11
---

# useTouch

<p class="description">Subscribe to focus events based on `onTouchStart`, `onTouchEnd`.</p>

## Demo

```tsx
import { useTouch } from '@fluent-windows/hooks'

function handleChange() {
  // ...
}
const [status, bind] = useTouch(handleChange)

<button {...bind}>{status}</button>
```
