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
