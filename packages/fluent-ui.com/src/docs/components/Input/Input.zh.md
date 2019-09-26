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
<Input placeholder='Hint text' />
```

## 受控的

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

是否禁用输入框

```jsx
<Input value='Hint text' disabled />
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

## 前置和后置

```jsx
<>
  <Input prefix="¥" suffix="RMB" />
  <Input prefix={<Icon.UserSmileLine />} suffix={<Icon.InformationLine />} />
</>
```
