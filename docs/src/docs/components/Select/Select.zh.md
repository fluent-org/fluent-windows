---
title: Select（选择框）
components: Select
type: Inputs
langKey: "zh"
---

# Select（选择框）

<p class="description">选择组件用于从选项列表收集用户提供的信息。</p>

## 受控的

```jsx
() => {
  const [select, set] = React.useState(1)
  function handleChange(value) {
    set(value)
  }
  return (
    <>
      <Box>{select}</Box>
      <Select value={select} onChange={handleChange}>
        <Item value={1}>green</Item>
        <Item value={2}>blue</Item>
        <Item value={3}>ryan</Item>
      </Select>
    </>
  )
}
```

## Disabled

```jsx
() => {
  const [select, set] = React.useState(1)
  function handleChange(value) {
    set(value)
  }
  return (
    <Select value={select} onChange={handleChange} disabled>
      <Item value={1}>green</Item>
      <Item value={2}>blue</Item>
      <Item value={3}>ryan</Item>
    </Select>
  )
}
```
