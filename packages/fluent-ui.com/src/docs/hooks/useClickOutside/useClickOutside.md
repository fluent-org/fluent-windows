---
title: useClickOutside
hooks: useClickOutside
type: hooks
langKey: "en"
order: 3
---

# useClickOutside

<p class="description">Subscribe to events that click on a location other than the specified element.</p>

## Demo

```tsx
import { useClickOutside } from '@fluent-ui/hooks'

const reference = React.useRef(null)

useClickOutside(
  reference,
  (): void => {
    // ...
  }
)

<div ref={reference}>xxx</div>
```
