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

## 幽灵按钮

```jsx
<Box padding={20} background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
  <Input ghost />
</Box>
```

## TextArea

```jsx
<Box padding={20} background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
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
