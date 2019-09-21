---
title: Tabs
components: Tabs
type: DataDisplay
langKey: "en"
---

# Tabs

<p class="description">Tabs make it easy to explore and switch between different views.</p>

## Simple Tabs

```jsx
() => {
  const [active, set] = React.useState('one')
  function handleChange(value) {
    set(value)
  }
  return (
    <Box
      padding={10}
      background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed"
    >
      <Tabs value={active} onChange={handleChange}>
        <Tabs.Panel value="one" title="Item One">
          Item One
        </Tabs.Panel>
        <Tabs.Panel value="two" title="Item Two">
          Item Two
        </Tabs.Panel>
        <Tabs.Panel value="three" title="Item Three">
          Item Three
        </Tabs.Panel>
      </Tabs>
    </Box>
  )
}
```

## Acrylic Tabs

```jsx
() => {
  const [active, set] = React.useState('one')
  function handleChange(value) {
    set(value)
  }
  return (
    <Box
      padding={10}
      background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed"
    >
      <Tabs value={active} onChange={handleChange} acrylic>
        <Tabs.Panel value="one" title="Item One">
          Item One
        </Tabs.Panel>
        <Tabs.Panel value="two" title="Item Two">
          Item Two
        </Tabs.Panel>
        <Tabs.Panel value="three" title="Item Three">
          Item Three
        </Tabs.Panel>
      </Tabs>
    </Box>
  )
}
```
