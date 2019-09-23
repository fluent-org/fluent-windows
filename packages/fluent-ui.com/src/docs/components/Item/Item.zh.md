---
title: Item（项目）
components: Item
type: DataDisplay
langKey: "zh"
---

# Item

<p class="description">可与多个组件配合使用，通常表示为列表中的项目。</p>

## 单独使用

```jsx
<Item prefix={<Icon.MenuLine />}>
  hello
</Item>
```

## 当前的

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

## 与其他组件搭配

- Use with [`Navigation`](/components/navigation)
- Use with [`List`](/components/list)
- Use with [`Select`](/components/select)
- Use with [`Command`](/components/command)
