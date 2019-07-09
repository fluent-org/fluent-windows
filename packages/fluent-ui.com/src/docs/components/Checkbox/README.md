---
title: Checkbox
components: Checkbox
---

# Checkbox

## Default

```jsx
() => {
  const [checked, set] = React.useState(false)
  function handleChange(c) {
    set(c)
  }
  return (
    <Checkbox checked={checked} onChange={handleChange} />
  )
}
```

## With Label

```jsx
() => {
  const [checked, set] = React.useState(false)
  function handleChange(c) {
    set(c)
  }
  return (
    <Checkbox checked={checked} onChange={handleChange}>Checkbox</Checkbox>
  )
}
```

## Disabled

```jsx
<>
  <Checkbox disabled />
  <Checkbox disabled checked/>
</>
```

