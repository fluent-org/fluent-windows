---
title: Card
components: Card
api: true
---

## API

```
import Card from '@fluent-ui/core/Card'
// or
import { Card } from '@fluent-ui/core'
```

Use `Card.Header` `Card.Content` `Card.Actions` inside Card so that f knows how to render to the target location.

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | React.ReactNode |  | The content of the `Card`. |
| pure | boolean |  | If `true`, You will get a basic pure card. |
| dynamic | boolean |  | If `true`, You will get a dynamic card. |

`Card` extends from `Box`, so you can use all the features of `Box`
