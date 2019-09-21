---
title: Select
components: Select
type: Inputs
langKey: "en"
---

# Select

<p class="description">Select components are used for collecting user provided information from a list of options.</p>

## Controlled

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
