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

## Disabled

```jsx
<Checkbox disabled/>
```

