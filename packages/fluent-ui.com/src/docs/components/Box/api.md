---
title: Box
components: Box
api: true
langKey: "en"
---

## API

```
import Box from '@fluent-ui/core/Box'
// or
import { Box } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| acrylic | boolean | false | [Acrylic](https://docs.microsoft.com/en-us/windows/uwp/design/style/acrylic) is a type of Brush that creates a translucent texture. You can apply acrylic to app surfaces to add depth and help establish a visual hierarchy. |
| children | React.ReactNode |  | The content of the Box. |
| as | string |  | If you want to keep all the styling you've applied to a component but just switch out what's being ultimately rendered (be it a different HTML tag or a different custom component), you can use the "as" prop to do this at runtime. |

`Box` is powered by [styled-system](https://styled-system.com/), so you can also use these [responsive apis](https://styled-system.com/table).

