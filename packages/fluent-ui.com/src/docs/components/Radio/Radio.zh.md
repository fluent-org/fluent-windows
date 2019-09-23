---
title: Radio（单选框）
components: Radio
type: Inputs
langKey: "zh"
---

# Radio（单选框）

<p class="description">用户可以通过单选按钮从一组中选择一个选项。</p>

## 受控的

```jsx
() => {
  const [checked, set] = React.useState('a')
  function handleChange(c) {
    set(c)
  }
  return (
    <>
      <Radio value='a' checked={checked === 'a'} onChange={handleChange} />
      <Radio value='b' checked={checked === 'b'} onChange={handleChange} />
      <Radio value='c' checked={checked === 'c'} onChange={handleChange} />
    </>
  )
}
```

## WithLabel

```jsx
() => {
  const [checked, set] = React.useState('a')
  function handleChange(c) {
    set(c)
  }
  return (
    <>
      <FormLabel label="a">
        <Radio value='a' checked={checked === 'a'} onChange={handleChange} />
      </FormLabel>
      <FormLabel label="b">
        <Radio value='b' checked={checked === 'b'} onChange={handleChange} />
      </FormLabel>
      <FormLabel label="b">
        <Radio value='c' checked={checked === 'c'} onChange={handleChange} />
      </FormLabel>
    </>
  )
}
```

## Disabled

```jsx
<>
  <Radio disabled />
  <Radio disabled checked />
</>
```

