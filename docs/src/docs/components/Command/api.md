---
title: Command
components: Command
api: true
langKey: "en"
---

## API

```
import Command from '@fluent-windows/core/Command'
// or
import { Command } from '@fluent-windows/core'
```

Use `Command.Content` `Command.Secondary` inside Command so that f knows how to render to the target location.

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | any[] |  | The content of the `Command`. |
| reveal | boolean | false | [Reveal](https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal) is a lighting effect that highlights interactive elements, such as command bars, when the user moves the pointer near them. |

`Command` extends from `Box`, so you can use all the features of `Box`
