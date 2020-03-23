---
title: useUpdateEffect（componentDidUpdate）
hooks: useUpdateEffect
type: hooks
langKey: "zh"
order: 12
---

# useUpdateEffect

<p class="description">忽略挂载(mount)阶段的 `React effect hooks`，类似于 `componentDidUpdate`</p>

## 例子

```tsx
import { useUpdateEffect } from '@fluent-windows/hooks'

const [count, setCount] = React.useState(0)
React.useEffect(() => {
  const interval = setInterval(() => {
    setCount(count => count + 1)
  }, 1000)

  return () => {
    clearInterval(interval)
  }
}, [])
useUpdateEffect(() => {
  console.log('count', count) // will only show 1 and beyond

  return () => {
    // do something on unmount
  }
}) // you can include deps array if necessary

return <div>Count: {count}</div>
```
