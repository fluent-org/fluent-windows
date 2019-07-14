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

```jsx
<Navigation>
  <Navigation.Header>
    <Navigation.Item>
      <Icon.GlobalNavigationButton />
    </Navigation.Item>
  </Navigation.Header>

  <Navigation.Item id={1}>
    <Icon.Connected />
    <span>Option 1</span>
  </Navigation.Item>
  <Navigation.Item id={2}>
    <Icon.Connected />
    <span>Option 2</span>
  </Navigation.Item>
  <Navigation.Item id={3}>
    <Icon.Connected />
    <span>Option 3</span>
  </Navigation.Item>
  <Navigation.Item id={4}>
    <Icon.Connected />
    <span>Option 4</span>
  </Navigation.Item>

  <Navigation.Footer>
    <Navigation.Item>
      <Icon.Settings />
      <span>Settings</span>
    </Navigation.Item>
  </Navigation.Footer>
</Navigation>
```

Use `Navigation.Header` `Navigation.Footer` inside Navigation so that f knows how to render to the target location.

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
