---
title: Command
components: Command
api: true
---

## API

```
import Command from '@fluent-ui/core/Command'
// or
import { Command } from '@fluent-ui/core'
```

```jsx
<Command>
  <CommandButton>
    <Icon.Back/>
  </CommandButton>
  <CommandButton>
    <Icon.Play/>
  </CommandButton>
  <CommandButton>
    <Icon.Forward/>
  </CommandButton>

  <Command.Content>
    Now Playing...
  </Command.Content>

  <Command.Secondary>
    <CommandButton>Like</CommandButton>
    <CommandButton>Dislike</CommandButton>
  </Command.Secondary>
</Command>
```

Use `Command.Content` `Command.Secondary` inside Command so that f knows how to render to the target location.

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | any[] |  | The content of the `Command`. |

`Command` extends from `Box`, so you can use all the features of `Box`
