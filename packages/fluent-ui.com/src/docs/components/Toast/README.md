---
title: Toast
components: Toast
type: Feedback
---

# Toast

## Default

```jsx
() => {
  const [visible, set] = React.useState(false)
  function handleChange() {
    set(v => !v)
  }
  return (
    <Box>
      <Button onClick={handleChange}>open</Button>
      <Toast
        visible={visible}
        actions={
          <IconButton onClick={handleChange}>
            <Icon.Cancel />
          </IconButton>
        }
      >
        message...
      </Toast>
    </Box>
  )
}
```

## Placement

```jsx
() => {
  const [visible, setVisible] = React.useState(false)
  const [placement, setPlacement] = React.useState('top')
  function handleVisibleChange() {
    setVisible(v => !v)
  }
  function handlePlacementChange(p) {
    setPlacement(p)
  }
  return (
    <>
      <Box>
        <Button onClick={handleVisibleChange}>open</Button>
      </Box>
      <Radio value="top-start" checked={placement === 'top-start'} onChange={handlePlacementChange}>
        top-start
      </Radio>
      <Radio value="top" checked={placement === 'top'} onChange={handlePlacementChange}>
        top
      </Radio>
      <Radio value="top-end" checked={placement === 'top-end'} onChange={handlePlacementChange}>
        top-end
      </Radio>
      <Radio
        value="bottom-start"
        checked={placement === 'bottom-start'}
        onChange={handlePlacementChange}
      >
        bottom-start
      </Radio>
      <Radio value="bottom" checked={placement === 'bottom'} onChange={handlePlacementChange}>
        bottom
      </Radio>
      <Radio
        value="bottom-end"
        checked={placement === 'bottom-end'}
        onChange={handlePlacementChange}
      >
        bottom-end
      </Radio>
      <Radio value="center" checked={placement === 'center'} onChange={handlePlacementChange}>
        center
      </Radio>

      <Toast
        visible={visible}
        actions={
          <IconButton onClick={handleVisibleChange}>
            <Icon.Cancel />
          </IconButton>
        }
        placement={placement}
      >
        message...
      </Toast>
    </>
  )
}
```

## With `useMessage`

You can also use a functional way to show, from [`@fluent-ui/hooks/useMessage`](/hooks/useMessage)

```jsx
() => {
  const [handleOpen, handleClose] = useMessage(
    (visible, content, close) => (
      <Toast
        visible={visible}
        actions={
          <IconButton onClick={close}>
            <Icon.Cancel />
          </IconButton>
        }
      >
        {content}
      </Toast>
    ),
    0
  )
  function handleClick() {
    handleOpen('hello world!')
  }
  return (
    <>
      <Button onClick={handleClick}>open</Button>
      <Button onClick={handleClose}>close</Button>
    </>
  )
}
```