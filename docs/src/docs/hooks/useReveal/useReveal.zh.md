---
title: useReveal（创建 Reveal 效果）
hooks: useReveal
type: hooks
langKey: "zh"
order: 10
---

# useReveal

<p class="description">创建 [Reveal Highlight](https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal) 效果.</p>

## 例子

```tsx
import { useReveal } from '@fluent-ui/hooks'

const [RevealWrapper] = useReveal(66)

<RevealWrapper><div>1</div></RevealWrapper>
<RevealWrapper><div>2</div></RevealWrapper>
<RevealWrapper><div>3</div></RevealWrapper>
```
