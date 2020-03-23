---
title: ItemGroup（项目组）
components: ItemGroup
api: true
langKey: "zh"
---

## API

```
import ItemGroup from '@fluent-windows/core/ItemGroup'
// or
import { ItemGroup } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | React.ReactElement &or; React.ReactElement[] |  | `ItemGroup` 的内容。 |
| title | string |  | `ItemGroup` 的标题。 |
| prefix | React.ReactElement |  | `ItemGroup` 的前缀。 |
| shrink | 'expand' &or; 'float' | 'expand' | `ItemGroup` 的展开方式 |
