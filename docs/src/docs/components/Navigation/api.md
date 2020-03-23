---
title: Navigation
components: Navigation
api: true
langKey: "en"
---

## API

```
import Navigation from '@fluent-windows/core/Navigation'
// or
import { Navigation } from '@fluent-windows/core'
```

Use `Navigation.Header` `Navigation.Footer` inside Navigation so that we knows how to render to the target location.

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | any[] |  | The content of the `Navigation`. |
| horizontal | boolean | false | If `true`, `Navigation` will become vertical. |
| expanded | boolean | true | If `false`, `Navigation` will become compact. |
| reveal | boolean | false | [Reveal](https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal) is a lighting effect that highlights interactive elements, such as command bars, when the user moves the pointer near them. |
| value | string &or; number |  | Currently selected `Item`. |
| onChange | (id: string &or; number) => void |  | Callback executed when a `Item` is selected. |

`Navigation` extends from `Box`, so you can use all the features of `Box`
