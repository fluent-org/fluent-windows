---
title: IconButton
components: IconButton
type: Inputs
langKey: "en"
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
  <Icon.CheckLine />
</IconButton>
```

### Highlighted button - primary

```jsx
<IconButton variant="primary">
  <Icon.CheckLine />
</IconButton>
```

## Disabled

Whether the button is disabled.

```jsx
<IconButton disabled>
  <Icon.CheckLine />
</IconButton>
```

## Sizes

Fancy larger or smaller buttons? Use the `size` property.

```jsx
<>
  <IconButton size="small" variant="primary">
    <Icon.CheckLine />
  </IconButton>
  <IconButton size="medium" variant="primary">
    <Icon.CheckLine />
  </IconButton>
  <IconButton size="large" variant="primary">
    <Icon.CheckLine />
  </IconButton>
</>
```

## As

You can use `as` to change the type of DOM tag.

```jsx
<IconButton as="a" href="#">
  <Icon.CheckLine />
</IconButton>
```
