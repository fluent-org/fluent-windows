---
title: Toggle
components: Toggle
---

# Toggle

<p class="description">Toggle allow the user to select one or more items from a set.</p>

## Controlled

```jsx
() => {
  const [checked, set] = React.useState(false)
  function handleChange(c) {
    set(c)
  }
  return (
    <Toggle checked={checked} onChange={handleChange} />
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
    <Toggle checked={checked} onChange={handleChange}>Toggle</Toggle>
  )
}
```

## Disabled

```jsx
<>
  <Toggle disabled />
  <Toggle disabled checked />
</>
```

