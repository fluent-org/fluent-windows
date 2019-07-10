---
title: IconButton
components: IconButton
---

# IconButtons

<p class="description">Icon buttons are commonly found in app bars and toolbars.</p>

## Variant

There are two styles of buttons, controlled by the variant prop.

- primary
- accent

### Default style - primary

```jsx
<IconButton>
  <Icon.Accept />
</IconButton>
```

### Highlighted button - accent

```jsx
<IconButton variant="accent">
  <Icon.Accept />
</IconButton>
```

## Disabled

Whether the button is disabled.

```jsx
<IconButton disabled>
  <Icon.Accept />
</IconButton>
```

## Sizes

Fancy larger or smaller buttons? Use the `size` property.

```jsx
<>
  <IconButton size="small" variant="accent">
    <Icon.Accept />
  </IconButton>
  <IconButton size="medium" variant="accent">
    <Icon.Accept />
  </IconButton>
  <IconButton size="large" variant="accent">
    <Icon.Accept />
  </IconButton>
</>
```

## As

Thanks to [`styled-components`](https://github.com/styled-components/styled-components), you can use `as` to change the type of DOM tag.

```jsx
<IconButton as="a" href="#">
  <Icon.Accept />
</IconButton>
```
