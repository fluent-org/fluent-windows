---
title: List（列表）
components: List
type: DataDisplay
langKey: "zh"
---

# List（列表）

<p class="description">列表通常展示连续的文字或图片。</p>

## 简单使用

```jsx
<List title="List Items">
  <Item>Option 1</Item>
  <Item>Option 2</Item>
  <Item>Option 3</Item>
  <Item>Option 4</Item>
</List>
```

## Acrylic

```jsx
<Box padding={10} background={`url(${bg}) center/cover fixed`}>
  <List title="List Items" acrylic>
    <Item>Option 1</Item>
    <Item>Option 2</Item>
    <Item>Option 3</Item>
    <Item>Option 4</Item>
  </List>
</Box>
```

## Reveal

```jsx
<Box padding={10} background={`url(${bg}) center/cover fixed`}>
  <List title="List Items" reveal>
    <Item>Option 1</Item>
    <Item>Option 2</Item>
    <Item>Option 3</Item>
    <Item>Option 4</Item>
  </List>
</Box>
```

## 嵌套

```jsx
<List title="List Items">
  <Item>Option 1</Item>
  <ItemGroup title="group" prefix={<Icon.MenuLine />}>
    <Item>Option 2</Item>
    <Item>Option 3</Item>
    <ItemGroup title="group inside">
      <Item>Option 4</Item>
      <Item>Option 5</Item>
    </ItemGroup>
  </ItemGroup>
  <Item>Option 6</Item>
</List>
```

## 文件夹

```jsx
<List title="List Items">
  <Item prefix={<Icon.MusicLine />}>
    <Box>
      <Typography variant="subtitle1">Music</Typography>
      <Typography variant="subtitle2" color="standard.dark1">Jan 1, 2019</Typography>
    </Box>
  </Item>
  <Item prefix={<Icon.Movie2Line />}>
    <Box>
      <Typography variant="subtitle1">Movie</Typography>
      <Typography variant="subtitle2" color="standard.dark1">Jan 2, 2019</Typography>
    </Box>
  </Item>
  <Item prefix={<Icon.ImageLine />}>
    <Box>
      <Typography variant="subtitle1">Photo</Typography>
      <Typography variant="subtitle2" color="standard.dark1">Jan 3, 2019</Typography>
    </Box>
  </Item>
</List>
```

## WithToggle

```jsx
() => {
  const [wifiChecked, setWifiChecked] = React.useState(false)
  const [bluetoothChecked, setbluetoothChecked] = React.useState(false)
  return (
    <List title="Settings">
      <Item prefix={<Icon.WifiLine />}>
        <Box flex={1} display="flex" justifyContent="space-between" alignItems="center">
          <span>Wi-Fi</span>
          <Toggle checked={wifiChecked} onChange={() => setWifiChecked(v => !v)} />
        </Box>
      </Item>
      <Item prefix={<Icon.BluetoothLine />}>
        <Box flex={1} display="flex" justifyContent="space-between" alignItems="center">
          <span>Bluetooth</span>
          <Toggle checked={bluetoothChecked} onChange={() => setbluetoothChecked(v => !v)} />
        </Box>
      </Item>
    </List>
  )
}
```

## WithCheckbox

```jsx
() => {
  const [item1, setItem1] = React.useState(false)
  const [item2, setItem2] = React.useState(false)
  return (
    <List title="Settings">
      <Item prefix={<Checkbox checked={item1} onChange={() => setItem1(v => !v)} />}>Item1</Item>
      <Item prefix={<Checkbox checked={item2} onChange={() => setItem2(v => !v)} />}>Item2</Item>
    </List>
  )
}
```
