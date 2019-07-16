---
title: Command
components: Command
---

# Command

<p class="description">Command bars provide users with easy access to the most common tasks within the app.</p>

## Default

```jsx
<Box padding="6em 8em" background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
  <Command acrylic>
    <CommandButton>
      <Icon.Back/>
    </CommandButton>
    <CommandButton>
      <Icon.Play/>
    </CommandButton>
    <CommandButton>
      <Icon.Forward/>
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

## reveal

```jsx
<Box padding="6em 8em" background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
  <Command reveal>
    <CommandButton>
      <Icon.Back/>
    </CommandButton>
    <CommandButton>
      <Icon.Play/>
    </CommandButton>
    <CommandButton>
      <Icon.Forward/>
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

## With label

```jsx
<Box padding="6em 8em" background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
  <Command acrylic>
    <CommandButton>
      <Icon.Back/>
      <span>Back</span>
    </CommandButton>
    <CommandButton>
      <Icon.Play/>
      <span>Play</span>
    </CommandButton>
    <CommandButton>
      <Icon.Forward/>
      <span>Forward</span>
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
<Box padding="6em 8em" background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
  <Box backgroundColor="none" display="flex" justifyContent="center">
    <Command acrylic>
      <CommandButton>
        <Icon.Back/>
      </CommandButton>
      <CommandButton>
        <Icon.Play/>
      </CommandButton>
      <CommandButton>
        <Icon.Forward/>
      </CommandButton>
    </Command>
  </Box>
</Box>
```
