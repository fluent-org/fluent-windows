---
title: guide
hooks: guide
type: hooks
langKey: "en"
order: 0
---

# Guide

Encapsulates many useful react hooks.

## Installation

```shell
// with npm
npm install @fluent-ui/hooks

// with yarn
yarn add @fluent-ui/hooks
```

## List

- Sensors
  - [useAction](/hooks/use-action) — EventBus hooks, Can be used for event communication in a global scope.
  - [useMedia](/hooks/use-media) — Tracks state of a CSS media query.
  - [useGlobal](/hooks/use-global) — Get the current `global this`.
  - [useClickOutside](/hooks/use-click-outside) — Subscribe to events that click on a location other than the specified element.
  - [useHover](/hooks/use-hover) — Subscribe to hover events based on `onMouseEnter`, `onMouseLeave`.
  - [useClick](/hooks/use-click) — Subscribe to mouse click events based on `onMouseUp`.
  - [useTouch](/hooks/use-touch) — Subscribe to focus events based on `onTouchStart`, `onTouchEnd`.
  - [useFocus](/hooks/use-focus) — Subscribe to focus events based on `onFocus`, `onBlur`.

- UI
  - [useReveal](/hooks/use-reveal) — Create [Reveal Highlight](https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal) Effects.
  - [usePopper](/hooks/use-popper) — Create popper, based on `popper.js`.
  - [useMessage](/hooks/use-message) — Information element using functional calls.

- Life cycle
  - [useUpdateEffect](/hooks/use-update-effect) — React effect hook that ignores the first invocation (e.g. on mount). The signature is exactly the same as the useEffect hook.
