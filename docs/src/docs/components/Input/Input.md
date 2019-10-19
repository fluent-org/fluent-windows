---
title: Input
components: Input
type: Inputs
langKey: "en"
---

# Inputs

<p class="description">The `Input` component enables a user to type text into an app. It's typically used to capture a single line of text, but can be configured to capture multiple lines of text. The text displays on the screen in a simple, uniform format.</p>

## Default

```jsx
<Input label='text' placeholder='Hint text' />
```

## Controlled

```jsx
() => {
  const [value, setValue] = React.useState('')
  function handleChange(v) {
    setValue(v)
  }
  return (
    <Input label='text' value={value} onChange={handleChange} />
  )
}
```

## Disabled

Whether the input is disabled.

```jsx
<Input label='text' value='Hint text' disabled />
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
    <Input label='text' value={value} onChange={handleChange} cleared />
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
    <Input label='password' value={value} onChange={handleChange} password />
  )
}
```

## Error

```jsx
() => {
  const [value, setValue] = React.useState('')
  function handleChange(v) {
    setValue(v)
  }
  return (
    <Input label='error' value={value} onChange={handleChange} error />
  )
}
```

## suffix

```jsx
<>
  <Input suffix="RMB" />
  <Input suffix={<Icon.InformationLine />} />
</>
```

## Ghost

```jsx
<Box padding={20} background={`url(${bg}) center/cover fixed`}>
  <Input label='ghost' ghost />
</Box>
```

## TextArea

```jsx
<Box padding={20} background={`url(${bg}) center/cover fixed`}>
  <Input.TextArea
    rows={4}
    placeholder="default"
    resize="none"
  />
  <Input.TextArea
    rows={4}
    placeholder="ghost"
    ghost
    resize="horizontal"
  />
  <Input.TextArea
    rows={4}
    placeholder="error"
    error
    resize="vertical"
  />
  <Input.TextArea
    rows={4}
    placeholder="disabled"
    disabled
    resize="none"
  />
</Box>
```
