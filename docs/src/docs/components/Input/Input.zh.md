---
title: Input（输入框）
components: Input
type: Inputs
langKey: "zh"
---

# Inputs（输入框）

<p class="description">用户可以在输入框内输入或编辑文字。</p>

## 默认

```jsx
<Input label='text' placeholder='Hint text' />
```

## 受控的

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

是否禁用输入框

```jsx
<Input label='text' value='Hint text' disabled />
```

## Cleared

展示一个清空输入框内容的按钮

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

## 后置

```jsx
<>
  <Input suffix="RMB" />
  <Input suffix={<Icon.InformationLine />} />
</>
```

## 幽灵

```jsx
<Box padding={20} background={`url(${bg}) center/cover fixed`}>
  <Input label='ghost' ghost />
</Box>
```

## TextArea

```jsx
<Box padding={20} background={`url(${bg}) center/cover fixed`}>
  <Input.TextArea
    label="default"
    rows={4}
    placeholder="default"
    resize="none"
  />
  <Input.TextArea
    label="ghost"
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
