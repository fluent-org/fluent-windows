---
title: Command（命令栏）
components: Command
type: Navigation
langKey: "zh"
---

# Command（命令栏）

<p class="description">Command 让用户在应用程序中轻松访问常用的任务。</p>

## 默认

```jsx
<Box padding={10} background={`url(${bg}) center/cover fixed`}>
  <Command acrylic>
    <Item prefix={<Icon.SkipBackMiniLine />} />
    <Item prefix={<Icon.PlayMiniLine />} />
    <Item prefix={<Icon.SkipForwardMiniLine />} />

    <Command.Content>
      Now Playing...
    </Command.Content>

    <Command.Secondary>
      <Item>Like</Item>
      <Item>Dislike</Item>
    </Command.Secondary>
  </Command>
</Box>
```

## reveal 效果

```jsx
<Box padding={10} background={`url(${bg}) center/cover fixed`}>
  <Command reveal>
    <Item prefix={<Icon.SkipBackMiniLine />} />
    <Item prefix={<Icon.PlayMiniLine />} />
    <Item prefix={<Icon.SkipForwardMiniLine />} />

    <Command.Content>
      Now Playing...
    </Command.Content>

    <Command.Secondary>
      <Item>Like</Item>
      <Item>Dislike</Item>
    </Command.Secondary>
  </Command>
</Box>
```

## With label

```jsx
<Box padding={10} background={`url(${bg}) center/cover fixed`}>
  <Command acrylic>
    <Item prefix={<Icon.SkipBackMiniLine />}>Back</Item>
    <Item prefix={<Icon.PlayMiniLine />}>Play</Item>
    <Item prefix={<Icon.SkipForwardMiniLine />}>Forward</Item>

    <Command.Content>
      Now Playing...
    </Command.Content>

    <Command.Secondary>
      <Item>Like</Item>
      <Item>Dislike</Item>
    </Command.Secondary>
  </Command>
</Box>
```

## 去除头尾

```jsx
<Box padding={10} background={`url(${bg}) center/cover fixed`}>
  <Box backgroundColor="none" display="flex" justifyContent="center">
    <Command acrylic>
      <Item prefix={<Icon.SkipBackMiniLine />} />
      <Item prefix={<Icon.PlayMiniLine />} />
      <Item prefix={<Icon.SkipForwardMiniLine />} />
    </Command>
  </Box>
</Box>
```
