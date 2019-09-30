---
title: useFocus
hooks: useFocus
type: hooks
langKey: "en"
order: 4
---

# useFocus

<p class="description">Subscribe to focus events based on `onFocus`, `onBlur`.</p>

## Demo

```tsx
import { useFocus } from '@fluent-ui/hooks'

function handleChange() {
  // ...
}
const [status, bind] = useFocus(handleChange)

<button {...bind}>{status}</button>
```
