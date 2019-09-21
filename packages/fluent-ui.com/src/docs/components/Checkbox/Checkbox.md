---
title: Checkbox
components: Checkbox
type: Inputs
langKey: "en"
---

# Checkbox

<p class="description">A Checkbox is a UI element that allows users to switch between two mutually exclusive options (checked or unchecked, on or off) through a single click or tap. It can also be used to indicate a subordinate setting or preference when paired with another control.</p>

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
    <FormLabel label="Checkbox">
      <Checkbox checked={checked} onChange={handleChange} />
    </FormLabel>
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

