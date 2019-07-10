---
title: IconButton
components: IconButton
---

# IconButtons

## Variant

Button default style

```jsx
<IconButton>
  <Icon.Accept />
</IconButton>
```

Highlighted button

```jsx
<IconButton variant="accent">
  <Icon.Accept />
</IconButton>
```

## Disabled

```jsx
<IconButton disabled>
  <Icon.Accept />
</IconButton>
```

## Sizes

Use the `size` property.

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

As a

```jsx
<IconButton as="a" href="#">
  <Icon.Accept />
</IconButton>
```
