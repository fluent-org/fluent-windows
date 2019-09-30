---
title: usePopper（创建 popper）
hooks: usePopper
type: hooks
langKey: "zh"
order: 9
---

# usePopper

<p class="description">创建 popper, 基于 `popper.js`</p>

## 例子

```tsx
import { usePopper } from '@fluent-ui/hooks'

const [referenceRef, popperRef] = usePopper({ placement = 'bottom' })

<button ref={referenceRef}></button>
<div ref={popperRef}>I am popper</div>
```
