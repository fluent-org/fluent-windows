---
title: Item
components: Item
type: DataDisplay
---

# Item

<p class="description">Common component that can be used with multiple components.</p>

## Use alone

```jsx
<Item prefix={<Icon.Connected />}>
  hello
</Item>
```

## Active Item

```jsx
<Box>
  <Item value={1} prefix={<Icon.Connected />} active>
    hello
  </Item>
  <Item value={2} prefix={<Icon.Connected />}>
    hello
  </Item>
</Box>
```

## Use with other components

- Use with [`Navigation`](/components/navigation)
- Use with [`List`](/components/list)
- Use with [`Select`](/components/select)
- Use with [`Command`](/components/command)
