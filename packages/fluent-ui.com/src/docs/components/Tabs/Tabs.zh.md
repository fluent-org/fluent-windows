---
title: Tabs（选项卡）
components: Tabs
type: DataDisplay
langKey: "zh"
---

# Tabs（选项卡）

<p class="description">选项卡可以方便地在不同视图之间进行探索和切换。</p>

## 简单的Tabs

```jsx
() => {
  const [active, set] = React.useState('one')
  function handleChange(value) {
    set(value)
  }
  return (
    <Box
      padding={10}
      background="url(/images/wall.jpg) center/cover fixed"
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
      background="url(/images/wall.jpg) center/cover fixed"
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
