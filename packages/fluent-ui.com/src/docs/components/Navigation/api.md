---
title: Navigation
components: Navigation
api: true
---

## API

```
import Navigation from '@fluent-ui/core/Navigation'
// or
import { Navigation } from '@fluent-ui/core'
```

Use `Navigation.Header` `Navigation.Footer` inside Navigation so that we knows how to render to the target location.

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | any[] |  | The content of the `Navigation`. |
| horizontal | boolean | false | If `true`, `Navigation` will become vertical. |
| expanded | boolean | true | If `false`, `Navigation` will become compact. |
| reveal | boolean |  | [Reveal](https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal) is a lighting effect that highlights interactive elements, such as command bars, when the user moves the pointer near them. |
| value | string &or; number |  | Currently selected `Item`. |
| onChange | (id: string &or; number) => void |  | Callback executed when a `Item` is selected. |

`Navigation` extends from `Box`, so you can use all the features of `Box`

### ItemGroup Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | React.ReactElement &or; React.ReactElement[] |  | The content of the `ItemGroup`. |
| title | string |  | The text displayed by the title. |
| icon | React.ReactElement |  | The icon displayed by the title. |
