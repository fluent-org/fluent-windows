---
title: Checkbox
components: Checkbox
type: Inputs
---

# Checkbox

<p class="description">Checkbox allow the user to select one or more items from a set.</p>

## Controlled

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

