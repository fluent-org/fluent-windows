---
title: ItemGroup
components: ItemGroup
type: DataDisplay
langKey: "en"
---

# ItemGroup

<p class="description">Used for grouping and nesting of Item components.</p>

## Default

```jsx
<Box>
  <Item prefix={<Icon.MenuLine />}>
    Option 1
  </Item>
  <Item prefix={<Icon.MenuLine />}>
    Option 2
  </Item>
  <Item prefix={<Icon.MenuLine />}>
    Option 3
  </Item>
  <ItemGroup title="group" prefix={<Icon.MenuLine />}>
    <Item>
      Option 4
    </Item>
    <Item>
      Option 5
    </Item>
    <ItemGroup title="group inside">
      <Item>
        Option 7
      </Item>
      <Item>
        Option 8
      </Item>
      <ItemGroup title="group inside">
        <Item>
          Option 9
        </Item>
        <Item>
          Option 10
        </Item>
      </ItemGroup>
    </ItemGroup>
  </ItemGroup>
  <Item>
    Option 6
  </Item>
</Box>
```

## Float

```jsx
<Box width={200}>
  <ItemGroup title="group" prefix={<Icon.MenuLine />} shrink="float">
    <Item>Option 1</Item>
    <Item>Option 2</Item>
    <ItemGroup title="group inside" shrink="float">
      <Item>Option 3</Item>
      <Item>Option 4</Item>
    </ItemGroup>
  </ItemGroup>
  <Item prefix={<Icon.MenuLine />}>option</Item>
</Box>
```

## Use with other components

- Use with [`Navigation`](/components/navigation#itemgroup)
- Use with [`List`](/components/list#nested-list)
