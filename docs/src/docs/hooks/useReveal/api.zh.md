---
title: useReveal（创建 Reveal 效果）
hooks: useReveal
api: true
langKey: "zh"
---

## API

```
import useReveal from '@fluent-windows/hooks/useReveal'
// or
import { useReveal } from '@fluent-windows/hooks'
```

### useReveal 参数

```ts
useReveal(
  gradientSize: number = 80,
  lightColor: CSS.ColorProperty = 'rgba(160, 160, 160, 1)'
): [React.FC<{ children: React.ReactElement }>]
```
