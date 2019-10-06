---
title: Drawer（抽屉）
components: Drawer
type: Navigation
langKey: "zh"
---

# Drawer（抽屉）

## Anchor 锚点

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
        <FormLabel label={t} key={t}>
          <Radio value={t} checked={type === t} onChange={handleSetType} />
        </FormLabel>
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
