---
title: Drawer
components: Drawer
type: Navigation
---

# Drawer

## Anchor

```jsx
() => {
  const [visible, setVisible] = React.useState(false)
  const types = ['left', 'right', 'top', 'bottom']
  const [type, setType] = React.useState('left')
  function handleSetVisible() {
    setVisible(v => !v)
  }
  function handleSetType(t) {
    setType(t)
  }
  return (
    <>
      {types.map(t => (
        <Radio key={t} value={t} checked={type === t} onChange={handleSetType}>
          {t}
        </Radio>
      ))}
      <Button onClick={handleSetVisible}>toggle</Button>
      <Drawer visible={visible} onChange={handleSetVisible} anchor={type}>
        <Box>
          <Box fontWeight={500} textAlign="center" padding={3}>Drawer Title</Box>
        </Box>
      </Drawer>
    </>
  )
}
```
