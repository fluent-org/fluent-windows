---
title: Toggle（开关）
components: Toggle
type: Inputs
langKey: "zh"
---

# Toggle（开关）

<p class="description">开关控制是改变单个设置状态打开或关闭的控件。</p>

## 受控的

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

