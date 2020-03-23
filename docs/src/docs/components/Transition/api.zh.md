---
title: Transition（过渡动画）
components: Transition
api: true
langKey: "zh"
---

## API

```
import Transition from '@fluent-windows/core/Transition'
// or
import { Transition } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | React.ReactNode |  | 需要应用动画的组件。 |
| visible | boolean | false | 控制组件显示。 |
| type | 'fade' &or; 'zoom' &or; 'slide' &or; 'collapse' &or; 'grow' | 'fade' | 动画效果的类型。 |
| wrapper | boolean | true | 如果 `true`，将在目标外部嵌套一层div来显示动画，否则动画将直接显示在目标上。 |
| mountOnEnter | boolean | false | 默认情况下，子组件与父组件一起立即挂载。如果您想“延迟挂载”第一个 `in={true}` 上的组件，可以设置 `mountOnEnter`。在第一次进入转换之后，组件将保持挂载状态，即使是在“退出”状态，除非您还指定了 `unmountOnExit`。 |
| unmountOnExit | boolean | false | 默认情况下，子组件在达到“退出”状态后仍然挂载。如果您希望在组件退出后卸载它，请设置 `unmountOnExit`。 |
| appear | boolean | true | 组件将在 `<Transition>` 挂载后立即转换。 |
| enter | boolean | true | 启用或禁用进入过渡。 |
| exit | boolean | true | 启用或禁用退出过渡。 |
| timeout | number &or; { enter?: number, exit?: number, appear?: number } | 250 | 转换的持续时间，以毫秒为单位。若不提供 `addEndListener` 他就是必填项。您可以为所有过渡效果指定一个单独的超时时间 `timeout={500}` 或 `timeout={{ appear: 500, enter: 300, exit: 500 }}` |
| addEndListener | (node: HtmlElement, done: function) => void |  | 添加自定义转换结束的回调。当DOM节点正在转换和完成时调用。允许更细粒度的转换结束逻辑。注意:如果提供 `timeout`，则仍然使用 `timeout` 作为回退。 |
| onEnter | (node: HtmlElement, isAppearing: boolean) => void |  | 在 `enter` 或 `appear` 类添加时触发的回调。 |
| onEntering | (node: HtmlElement, isAppearing: boolean) => void |  | 在 `enter-active` 或 `appear-active` 类添加时触发的回调。 |
| onEntered | (node: HtmlElement, isAppearing: boolean) => void |  | 在 `enter` 或 `appear` 类删除，并且 `-done` 类添加时触发的回调。 |
| onExit | (node: HtmlElement) => void |  | 在 `exit` 类添加时触发的回调。 |
| onExiting | (node: HtmlElement) => void |  | 在 `exit-active` 类添加时触发的回调。 |
| onExited | (node: HtmlElement) => void |  | 在 `exit` 类删除，并且 `exit-done` 类添加时触发的回调。 |

 查看更多细节 [React Transition Group](https://github.com/reactjs/react-transition-group)
