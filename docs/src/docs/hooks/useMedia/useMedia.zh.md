---
title: useMedia（跟踪 CSS 媒体查询）
hooks: useMedia
type: hooks
langKey: "zh"
order: 7
---

# useMedia

<p class="description">跟踪一个CSS媒体查询的状态。（注意：目前不支持SSR）</p>

## 例子

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
