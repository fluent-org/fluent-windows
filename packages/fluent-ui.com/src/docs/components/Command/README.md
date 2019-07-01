---
title: Command
components: Command
---

# Command

<p class="description">Command bars provide users with easy access to the most common tasks within the app.</p>

## Default

```jsx
<Box padding="6em 8em" background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover">
  <Command acrylic>
    <CommandButton icon="Back" />
    <CommandButton icon="Play" />
    <CommandButton icon="Forward" />

    <Command.Content>
      Now Playing...
    </Command.Content>

    <Command.Secondary>
      <CommandButton>Like</CommandButton>
      <CommandButton>Dislike</CommandButton>
    </Command.Secondary>
  </Command>
</Box>
```

## reveal

```jsx
<Box padding="6em 8em" background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover">
  <Command reveal>
    <CommandButton icon="Back" />
    <CommandButton icon="Play" />
    <CommandButton icon="Forward" />

    <Command.Content>
      Now Playing...
    </Command.Content>

    <Command.Secondary>
      <CommandButton>Like</CommandButton>
      <CommandButton>Dislike</CommandButton>
    </Command.Secondary>
  </Command>
</Box>
```

## With label

```jsx
<Box padding="6em 8em" background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover">
  <Command acrylic>
    <CommandButton icon="Back">
      Back
    </CommandButton>
    <CommandButton icon="Play">
      Play
    </CommandButton>
    <CommandButton icon="Forward">
      Forward
    </CommandButton>

    <Command.Content>
      Now Playing...
    </Command.Content>

    <Command.Secondary>
      <CommandButton>Like</CommandButton>
      <CommandButton>Dislike</CommandButton>
    </Command.Secondary>
  </Command>
</Box>
```

## Without Content and Secondary

```jsx
<Box padding="6em 8em" background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover">
  <Box backgroundColor="none" display="flex" justifyContent="center">
    <Command acrylic>
      <CommandButton icon="Back" />
      <CommandButton icon="Play" />
      <CommandButton icon="Forward" />
    </Command>
  </Box>
</Box>
```
