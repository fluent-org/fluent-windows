---
title: Tabs
components: Tabs
api: true
langKey: "en"
---

## API

```
import Tabs from '@fluent-ui/core/Tabs'
// or
import { Tabs } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | React.ReactText |  | Currently selected `Item`. |
| onChange | (value: React.ReactText) => void |  | Callback executed when a `Item` is selected. |
| children&nbsp;* | React.ReactElement &or; React.ReactElement[] |  | The content of the component. |

### PanelProps

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | React.ReactText |  | The uniquely identifies. |
| title | React.ReactChild |  | Tab header display text. |
| children | React.ReactElement &or; React.ReactElement[] |  | Display portion of text and other content. |

`Tabs` extends from `Box`, so you can use all the features of `Box`
