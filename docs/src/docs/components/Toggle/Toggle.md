---
title: Toggle
components: Toggle
type: Inputs
langKey: "en"
---

# Toggle

<p class="description">Toggles represent a physical switch that allows users to turn things on or off. Use Toggles to present users with two mutually exclusive options (like on/off), where choosing an option results in an immediate action.</p>

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

## WithLabel

```jsx
() => {
  const [checked, set] = React.useState(false)
  function handleChange(c) {
    set(c)
  }
  return (
    <FormLabel label="Toggle">
      <Toggle checked={checked} onChange={handleChange} />
    </FormLabel>
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

