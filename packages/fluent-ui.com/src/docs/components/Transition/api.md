---
title: Transition
components: Transition
api: true
---

## API

```
import Transition from '@fluent-ui/core/Transition'
// or
import { Transition } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | React.ReactNode |  | Elements that require transition effects. |
| visible | boolean | false | Control element display. |
| type | 'fade' &or; 'zoom' &or; 'slide' &or; 'collapse' | 'fade' | Transition effects type. |
| wrapper | boolean | true | If `true` a layer of div will be nested outside the target to display the animation, otherwise the animation will be displayed directly on the target. |
| mountOnEnter | boolean | false | By default the child component is mounted immediately along with the parent `Transition` component. If you want to "lazy mount" the component on the first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay mounted, even on "exited", unless you also specify `unmountOnExit`. |
| unmountOnExit | boolean | false | By default the child component stays mounted after it reaches the `'exited'` state. Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting. |
| appear | boolean | true | The component will transition in as soon as the `<Transition>` mounts. |
| enter | boolean | true | Enable or disable enter transitions. |
| exit | boolean | true | Enable or disable exit transitions. |
| timeout | number &or; { enter?: number, exit?: number, appear?: number } | 250 | The duration of the transition, in milliseconds. Required unless `addEndListener` is provided. You may specify a single timeout for all transitions: `timeout={500}` or individually: `timeout={{ appear: 500, enter: 300, exit: 500 }}` |
| addEndListener | (node: HtmlElement, done: function) => void |  | Add a custom transition end trigger. Called with the transitioning DOM node and a done callback. Allows for more fine grained transition end logic. Note: Timeouts are still used as a fallback if provided. |
| onEnter | (node: HtmlElement, isAppearing: boolean) => void |  | A `<Transition>` callback fired immediately after the `'enter'` or `'appear'` class is applied. |
| onEntering | (node: HtmlElement, isAppearing: boolean) => void |  | A `<Transition>` callback fired immediately after the `'enter-active'` or `'appear-active'` class is applied. |
| onEntered | (node: HtmlElement, isAppearing: boolean) => void |  | A `<Transition>` callback fired immediately after the `'enter'` or `'appear'` classes are removed and the done class is added to the DOM node. |
| onExit | (node: HtmlElement) => void |  | A `<Transition>` callback fired immediately after the `'exit'` class is applied. |
| onExiting | (node: HtmlElement) => void |  | A `<Transition>` callback fired immediately after the `'exit-active'` is applied. |
| onExited | (node: HtmlElement) => void |  | A `<Transition>` callback fired immediately after the `'exit'` classes are removed and the `'exit-done'` class is added to the DOM node. |

See more details [React Transition Group](https://github.com/reactjs/react-transition-group)
