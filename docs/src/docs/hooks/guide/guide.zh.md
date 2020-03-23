---
title: guide（引导）
hooks: guide
type: hooks
langKey: "zh"
order: 0
---

# 引导

封装了一些有用的 react hooks。

## 安装

```shell
// with npm
npm install @fluent-windows/hooks

// with yarn
yarn add @fluent-windows/hooks
```

## 使用

```js
import { useGlobal } from '@fluent-windows/hooks'

const global = useGlobal()
```

## 列表

- Sensors
  - [useAction](/zh/hooks/use-action) — EventBus hooks，可以用于全局范围内的事件通信。
  - [useMedia](/zh/hooks/use-media) — 跟踪一个CSS媒体查询的状态。
  - [useGlobal](/zh/hooks/use-global) — 获取当前 `全局 this`。
  - [useClickOutside](/zh/hooks/use-click-outside) — 订阅点击元素以外位置的事件。
  - [useHover](/zh/hooks/use-hover) — 订阅基于 `onMouseEnter` `onMouseLeave` 的悬停事件。
  - [useClick](/zh/hooks/use-click) — 订阅基于 `onMouseUp` 的鼠标点击事件。
  - [useTouch](/zh/hooks/use-touch) — 订阅基于 `onTouchStart` `onTouchEnd` 的焦点事件。
  - [useFocus](/zh/hooks/use-focus) — 订阅基于 `onFocus` `onBlur` 的焦点事件。

- UI
  - [useReveal](/zh/hooks/use-reveal) — 创建 [Reveal Highlight](https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal) 效果。
  - [usePopper](/zh/hooks/use-popper) — 创建 popper, 基于 popper.js。
  - [useMessage](/zh/hooks/use-message) — 函数式调用 React 信息类组件。

- Life cycle
  - [useUpdateEffect](/zh/hooks/use-update-effect) — 忽略挂载(mount)阶段的 `React effect hooks`，类似于 `componentDidUpdate`。
