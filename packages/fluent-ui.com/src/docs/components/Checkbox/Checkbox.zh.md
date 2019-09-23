---
title: Checkbox（复选框）
components: Checkbox
type: Inputs
langKey: "zh"
---

# Checkbox（复选框）

<p class="description">在一个集合内，用户可以通过复选框来选择一个或者多个选项。</p>

## Controlled 受控组件

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

## 与 FormLabel 配合使用

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

## 禁用的

```jsx
<>
  <Checkbox disabled />
  <Checkbox disabled checked/>
</>
```

