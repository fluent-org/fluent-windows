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
<Box padding={10} background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
  <Command acrylic>
    <Item prefix={<Icon.Back />} />
    <Item prefix={<Icon.Play />} />
    <Item prefix={<Icon.Forward />} />

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
<Box padding={10} background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
  <Command reveal>
    <Item prefix={<Icon.Back />} />
    <Item prefix={<Icon.Play />} />
    <Item prefix={<Icon.Forward />} />

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
<Box padding={10} background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
  <Command acrylic>
    <Item prefix={<Icon.Back />}>Back</Item>
    <Item prefix={<Icon.Play />}>Play</Item>
    <Item prefix={<Icon.Forward />}>Forward</Item>

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
<Box padding={10} background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
  <Box backgroundColor="none" display="flex" justifyContent="center">
    <Command acrylic>
      <Item prefix={<Icon.Back />} />
      <Item prefix={<Icon.Play />} />
      <Item prefix={<Icon.Forward />} />
    </Command>
  </Box>
</Box>
```
