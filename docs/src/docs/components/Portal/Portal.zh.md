---
title: Portal（传送门）
components: Portal
type: Utils
langKey: "zh"
---

# Portal（传送门）

<p class="description">将其子组件呈现在当前组件层次结构之外的新“子树”中。</p>

## 简单例子

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
