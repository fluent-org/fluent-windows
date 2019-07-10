---
title: Button
components: Button
---

# Buttons

<p class="description">Buttons give users a way to trigger an immediate action.</p>

## Variant

There are two styles of buttons, controlled by the variant prop.

- primary
- accent

### Default style - primary

```jsx
<Button>Primary</Button>
```

### Highlighted button - accent

```jsx
<Button variant="accent">Accent</Button>
```

## Disabled

Whether the button is disabled.

```jsx
<Button disabled>Disabled</Button>
```

## Sizes

Fancy larger or smaller buttons? Use the `size` property.

```jsx
<>
  <Button size="small">small</Button>
  <Button size="medium">medium</Button>
  <Button size="large">large</Button>
</>
```

## As

Thanks to [`styled-components`](https://github.com/styled-components/styled-components), you can use `as` to change the type of DOM tag.

```jsx
<Button as="a" href="#">As a</Button>
```
