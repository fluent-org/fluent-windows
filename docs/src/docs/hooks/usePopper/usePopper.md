---
title: usePopper
hooks: usePopper
type: hooks
langKey: "en"
order: 9
---

# usePopper

<p class="description">Create popper, based on `popper.js`</p>

## Demo

```tsx
import { usePopper } from '@fluent-ui/hooks'

const [referenceRef, popperRef] = usePopper({ placement = 'bottom' })

<button ref={referenceRef}></button>
<div ref={popperRef}>I am popper</div>
```
