---
title: IconButton
components: IconButton
api: true
---

## API

```
import IconButton from '@fluent-ui/core/IconButton'
// or
import { IconButton } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| variant | 'standard' &or; 'primary' | 'standard' | The variant to use. |
| disabled | boolean |  | If `true`, the button will be disabled. |
| size | 'small' &or; 'medium' &or; 'large' | 'medium' | The size of the button. |
| onClick | (event) => void |  | Set the handler to handle click event. |
| children&nbsp;* | React.ReactNode |  | The content of the button. |
| as | string |  | If you want to keep all the styling you've applied to a component but just switch out what's being ultimately rendered (be it a different HTML tag or a different custom component), you can use the "as" prop to do this at runtime. (powered by [styled-components](https://github.com/styled-components/styled-components)) |
| href | string |  | If the value of the as prop is "a", add an href for the a tag. |
