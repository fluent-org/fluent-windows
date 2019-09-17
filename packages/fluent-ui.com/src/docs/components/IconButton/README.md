---
title: IconButton
components: IconButton
type: Inputs
---

# IconButtons

<p class="description">Icon buttons are commonly found in app bars and toolbars.</p>

## Variant

There are two styles of buttons, controlled by the variant prop.

- standard
- primary

### Default style - standard

```jsx
<IconButton>
  <Icon.Accept />
</IconButton>
```

### Highlighted button - primary

```jsx
<IconButton variant="primary">
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
  <IconButton size="small" variant="primary">
    <Icon.Accept />
  </IconButton>
  <IconButton size="medium" variant="primary">
    <Icon.Accept />
  </IconButton>
  <IconButton size="large" variant="primary">
    <Icon.Accept />
  </IconButton>
</>
```

## As

You can use `as` to change the type of DOM tag.

```jsx
<IconButton as="a" href="#">
  <Icon.Accept />
</IconButton>
```
