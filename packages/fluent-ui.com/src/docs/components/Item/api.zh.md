---
title: Item（项目）
components: Item
api: true
langKey: "zh"
---

## API

```
import Item from '@fluent-ui/core/Item'
// or
import { Item } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | string &or; number |  | 唯一标识。 |
| prefix | React.ReactElement |  | `Item` 的前缀。 |
| active | boolean |  | 如果 `true`, `Item` 将会变为当前被选中的元素, 需要匹配 `value`. |
| children | React.ReactChild |  | `Item` 的内容。 |
| onClick | React.MouseEventHandler |  | `Item` 的 `click` 事件回调。 |
