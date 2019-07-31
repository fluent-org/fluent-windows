---
title: Portal
components: Portal
type: Utils
---

# Portal

<p class="description">The portal component renders its children into a new "subtree" outside of current component hierarchy.
</p>

## Simple Portal

```jsx
() => {
  const [show, setShow] = React.useState(false)
  const container = React.useRef(null)

  function handleClick() {
    setShow(!show)
  }

  return (
    <Box>
      <Button onClick={handleClick}>{show ? 'Unmount' : 'Mount'}</Button>
      <Box>
        <Typography>It looks like I will render here?</Typography>
        {show ? (
          <Portal container={container.current}>
            <Typography>Actually render here!</Typography>
          </Portal>
        ) : null}
      </Box>
      <Box ref={container} />
    </Box>
  )
}
```
