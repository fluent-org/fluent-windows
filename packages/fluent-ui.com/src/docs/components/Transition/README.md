---
title: Transition
components: Transition
---

# Transition

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
      <Box display="flex">
        <Transition visible={visible}>
          <Box width={50} height={50} margin={2} backgroundColor="white.default"></Box>
        </Transition>
      </Box>
    </>
  )
}
```

## Zoom

conditionally applies the `timeout` property to change the entry speed.

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
          <Box display="inline-block" width={50} height={50} margin={2} backgroundColor="white.default"></Box>
        </Transition>
        <Transition visible={visible} type="zoom" timeout={500}>
          <Box display="inline-block" width={50} height={50} margin={2} backgroundColor="white.default"></Box>
        </Transition>
      </Box>
    </>
  )
}
```

## Slide

The Transition component's `mountOnEnter` property prevents the child component from being mounted until in is true. This prevents the relatively positioned component from scrolling into view from it's off-screen position. Similarly the `unmountOnExit` property removes the component from the DOM after it has been transition off screen.

```jsx
() => {
  const [visible, setVisible] = React.useState(false)
  function handleVisible() {
    setVisible(v => !v)
  }
  return (
    <>
      <Toggle checked={visible} onChange={handleVisible} />
      <Transition visible={visible} type="slide" mountOnEnter unmountOnExit>
        <Box width={50} height={50} margin={2} backgroundColor="white.default"></Box>
      </Transition>
    </>
  )
}
```
