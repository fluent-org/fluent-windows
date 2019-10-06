---
title: Select
components: Select
api: true
langKey: "en"
---

## API

```
import Select from '@fluent-ui/core/Select'
// or
import { Select } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | string &or; number |  | As the currently selected value |
| onChange | (value: string &or; number) => void |  | Callback fired when the state is changed. |
| disabled | boolean | false | 	If `true`, the `Select` will be disabled. |
| children | React.ReactElement &or; React.ReactElement[] |  | Render as the content of `Select`. |
