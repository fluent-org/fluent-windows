---
title: Tabs
components: Tabs
type: DataDisplay
langKey: "en"
---

# Tabs

<p class="description">Tabs make it easy to explore and switch between different views.</p>

## SimpleTabs

```jsx
() => {
  const [active, set] = React.useState('one')
  function handleChange(value) {
    set(value)
  }
  return (
    <Box
      padding={10}
      background={`url(${bg}) center/cover fixed`}
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

## Acrylic

```jsx
() => {
  const [active, set] = React.useState('one')
  function handleChange(value) {
    set(value)
  }
  return (
    <Box
      padding={10}
      background={`url(${bg}) center/cover fixed`}
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
