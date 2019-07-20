---
title: Input
components: Input
type: Inputs
---

# Inputs

<p class="description">Text fields let users enter and edit text.</p>

## Default

```jsx
<Input placeholder='Hint text' />
```

## Controlled

```jsx
() => {
  const [value, setValue] = React.useState('')
  function handleChange(v) {
    setValue(v)
  }
  return (
    <Input value={value} onChange={handleChange} />
  )
}
```

## Disabled

Whether the button is disabled.

```jsx
<Input value='Hint text' disabled />
```

## Cleared

Show a button to clear your input.

```jsx
() => {
  const [value, setValue] = React.useState('')
  function handleChange(v) {
    setValue(v)
  }
  return (
    <Input value={value} onChange={handleChange} cleared />
  )
}
```

## Password

```jsx
() => {
  const [value, setValue] = React.useState('')
  function handleChange(v) {
    setValue(v)
  }
  return (
    <Input value={value} onChange={handleChange} password />
  )
}
```
