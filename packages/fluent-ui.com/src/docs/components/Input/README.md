---
title: Input
components: Input
---

# Inputs

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

```jsx
<Input value='Hint text' disabled />
```

## Cleared

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
