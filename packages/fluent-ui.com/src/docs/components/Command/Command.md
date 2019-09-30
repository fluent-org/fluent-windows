---
title: Command
components: Command
type: Navigation
langKey: "en"
---

# Command

<p class="description">Command bars provide users with easy access to the most common tasks within the app.</p>

## Default

```jsx
<Box padding={10} background="url(/images/wall.jpg) center/cover fixed">
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

## reveal

```jsx
<Box padding={10} background="url(/images/wall.jpg) center/cover fixed">
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
<Box padding={10} background="url(/images/wall.jpg) center/cover fixed">
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

## Without Content and Secondary

```jsx
<Box padding={10} background="url(/images/wall.jpg) center/cover fixed">
  <Box backgroundColor="none" display="flex" justifyContent="center">
    <Command acrylic>
      <Item prefix={<Icon.SkipBackMiniLine />} />
      <Item prefix={<Icon.PlayMiniLine />} />
      <Item prefix={<Icon.SkipForwardMiniLine />} />
    </Command>
  </Box>
</Box>
```
