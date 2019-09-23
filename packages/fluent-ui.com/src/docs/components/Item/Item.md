---
title: Item
components: Item
type: DataDisplay
langKey: "en"
---

# Item

<p class="description">May be used in conjunction with a plurality of components, usually represented as a list of items.</p>

## UseAlone

```jsx
<Item prefix={<Icon.MenuLine />}>
  hello
</Item>
```

## ActiveItem

```jsx
<Box>
  <Item value={1} prefix={<Icon.MenuLine />} active>
    hello
  </Item>
  <Item value={2} prefix={<Icon.MenuLine />}>
    hello
  </Item>
</Box>
```

## UseWithOtherComponents

- Use with [`Navigation`](/components/navigation)
- Use with [`List`](/components/list)
- Use with [`Select`](/components/select)
- Use with [`Command`](/components/command)
