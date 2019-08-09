---
title: ItemGroup
components: ItemGroup
type: DataDisplay
---

# ItemGroup

<p class="description">Used for grouping and nesting of Item components.</p>

## Default

```jsx
<Box>
  <Item icon={<Icon.Connected />}>
    Option 1
  </Item>
  <Item icon={<Icon.Connected />}>
    Option 2
  </Item>
  <Item icon={<Icon.Connected />}>
    Option 3
  </Item>
  <ItemGroup title="group" icon={<Icon.Connected />}>
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

## Use with other components

- Use with [`Navigation`](/components/navigation#itemgroup)
