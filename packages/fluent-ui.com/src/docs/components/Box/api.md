---
title: Box
components: Box
api: true
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
| children | React.ReactNode |  | The content of the button. |
| as | string |  | If you want to keep all the styling you've applied to a component but just switch out what's being ultimately rendered (be it a different HTML tag or a different custom component), you can use the "as" prop to do this at runtime. (powered by [styled-components](https://github.com/styled-components/styled-components)) |

`Box` is powered by [@xstyled/system](https://www.smooth-code.com/open-source/xstyled/docs/getting-started/), so you can also use these [responsive apis](https://www.smooth-code.com/open-source/xstyled/docs/system-props/#space).

