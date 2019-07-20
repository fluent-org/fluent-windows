---
title: Radio
components: Radio
type: Inputs
---

# Radio

<p class="description">Radio allow the user to select one option from a set.</p>

## Controlled

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

## With Label

```jsx
() => {
  const [checked, set] = React.useState('a')
  function handleChange(c) {
    set(c)
  }
  return (
    <>
      <Radio value='a' checked={checked === 'a'} onChange={handleChange}>aaa</Radio>
      <Radio value='b' checked={checked === 'b'} onChange={handleChange}>bbb</Radio>
      <Radio value='c' checked={checked === 'c'} onChange={handleChange}>ccc</Radio>
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

