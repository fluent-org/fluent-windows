---
title: Transition（过渡动画）
components: Transition
type: Utils
langKey: "zh"
---

# Transition（过渡动画）

## Fade

```jsx
() => {
  const [visible, setVisible] = React.useState(false)
  function handleVisible() {
    setVisible(v => !v)
  }
  return (
    <>
      <Toggle checked={visible} onChange={handleVisible} />
      <Box>
        <Transition visible={visible}>
          <Box display="inline-block" width={50} height={50} margin={2} backgroundColor="standard.light2"></Box>
        </Transition>
      </Box>
    </>
  )
}
```

## Zoom

有条件地应用 `timeout` 属性来更改动画进入时间。

```jsx
() => {
  const [visible, setVisible] = React.useState(false)
  function handleVisible() {
    setVisible(v => !v)
  }
  return (
    <>
      <Toggle checked={visible} onChange={handleVisible} />
      <Box display="flex">
        <Transition visible={visible} type="zoom">
          <Box display="inline-block" width={50} height={50} margin={2} backgroundColor="standard.light2"></Box>
        </Transition>
        <Transition visible={visible} type="zoom" timeout={500}>
          <Box display="inline-block" width={50} height={50} margin={2} backgroundColor="standard.light2"></Box>
        </Transition>
      </Box>
    </>
  )
}
```

## Slide

`mountOnEnter` 属性会在子组件进入动画展示前阻止子组件渲染。这样可以防止相对定位的组件从屏幕外滚到到视图中。
`unmountOnExit` 类似，移除动画展示后将子组件从 DOM 中移除。

```jsx
() => {
  const [visible, setVisible] = React.useState(false)
  function handleVisible() {
    setVisible(v => !v)
  }
  return (
    <>
      <Toggle checked={visible} onChange={handleVisible} />
      <Box>
        <Transition visible={visible} type="slide" mountOnEnter unmountOnExit>
          <Box display="inline-block" width={50} height={50} margin={2} backgroundColor="standard.light2"></Box>
        </Transition>
      </Box>
    </>
  )
}
```

## Collapse

```jsx
() => {
  const [visible, setVisible] = React.useState(false)
  function handleVisible() {
    setVisible(v => !v)
  }
  return (
    <>
      <Toggle checked={visible} onChange={handleVisible} />
      <Transition visible={visible} type="collapse">
        <Box width={50} height={50} backgroundColor="standard.light2"></Box>
      </Transition>
    </>
  )
}
```

## Grow

```jsx
() => {
  const [visible, setVisible] = React.useState(false)
  function handleVisible() {
    setVisible(v => !v)
  }
  return (
    <>
      <Toggle checked={visible} onChange={handleVisible} />
      <Box>
        <Transition visible={visible} type="grow">
          <Box display="inline-block" width={50} height={50} backgroundColor="standard.light2"></Box>
        </Transition>
      </Box>
    </>
  )
}
```
