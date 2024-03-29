---
title: Item
components: Item
api: true
langKey: "en"
---

## API

```
import Item from '@fluent-windows/core/Item'
// or
import { Item } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | string &or; number |  | The uniquely identifies. |
| prefix | React.ReactElement |  | The prefix displayed. |
| active | boolean |  | If `true`, the `Item` will be active, need to match `value`. |
| children | React.ReactChild |  | Display portion of text and other content. |
| onClick | React.MouseEventHandler |  | Set the handler to handle click event. |
