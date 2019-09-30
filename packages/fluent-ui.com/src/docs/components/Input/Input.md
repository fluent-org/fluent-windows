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

Whether the input is disabled.

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

## Error

```jsx
() => {
  const [value, setValue] = React.useState('')
  function handleChange(v) {
    setValue(v)
  }
  return (
    <Input value={value} onChange={handleChange} error />
  )
}
```

## PrefixAndSuffix

```jsx
<>
  <Input prefix="¥" suffix="RMB" />
  <Input prefix={<Icon.UserSmileLine />} suffix={<Icon.InformationLine />} />
</>
```

## Ghost

```jsx
<Box padding={20} background="url(/images/wall.jpg) center/cover fixed">
  <Input ghost />
</Box>
```

## TextArea

```jsx
<Box padding={20} background="url(/images/wall.jpg) center/cover fixed">
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
