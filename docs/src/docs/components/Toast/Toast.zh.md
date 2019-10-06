---
title: Toast（消息条）
components: Toast
type: Feedback
langKey: "zh"
---

# Toast（消息条）

## 默认

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
            <Icon.CloseLine />
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
      <FormLabel label="top-start">
        <Radio value='top-start' checked={placement === 'top-start'} onChange={handlePlacementChange} />
      </FormLabel>
      <FormLabel label="top">
        <Radio value='top' checked={placement === 'top'} onChange={handlePlacementChange} />
      </FormLabel>
      <FormLabel label="top-end">
        <Radio value='top-end' checked={placement === 'top-end'} onChange={handlePlacementChange} />
      </FormLabel>
      <FormLabel label="bottom-start">
        <Radio value='bottom-start' checked={placement === 'bottom-start'} onChange={handlePlacementChange} />
      </FormLabel>
      <FormLabel label="bottom">
        <Radio value='bottom' checked={placement === 'bottom'} onChange={handlePlacementChange} />
      </FormLabel>
      <FormLabel label="bottom-end">
        <Radio value='bottom-end' checked={placement === 'bottom-end'} onChange={handlePlacementChange} />
      </FormLabel>
      <FormLabel label="center">
        <Radio value='center' checked={placement === 'center'} onChange={handlePlacementChange} />
      </FormLabel>

      <Toast
        visible={visible}
        actions={
          <IconButton onClick={handleVisibleChange}>
            <Icon.CloseLine />
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
