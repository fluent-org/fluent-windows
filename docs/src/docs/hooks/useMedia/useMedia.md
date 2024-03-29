---
title: useMedia
hooks: useMedia
type: hooks
langKey: "en"
order: 7
---

# useMedia

<p class="description">Tracks state of a CSS media query. (Note that ssr is currently not supported.)</p>

## Demo

```tsx
import { useMedia } from '@fluent-windows/hooks'

const isWide = useMedia('(min-width: 600px)')

<div>
  Screen is wide: {isWide ? 'Yes' : 'No'}
</div>

// or you can use breakpoints

const isWide = useMedia('sm')

<div>
  Screen is wide: {isWide ? 'Yes' : 'No'}
</div>
```
