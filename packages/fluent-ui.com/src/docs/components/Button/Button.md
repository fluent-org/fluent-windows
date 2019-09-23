---
title: Button
components: Button
type: Inputs
langKey: "en"
---

# Buttons

<p class="description">Buttons are best used to enable a user to commit a change or complete steps in a task. They are typically found inside forms, dialogs, panels or pages. An example of their usage is confirming the deletion of a file in a confirmation dialog.</p>

## Variant

There are two styles of buttons, controlled by the variant prop.

- standard
- primary

### Default-standard

```jsx
<Button>Standard</Button>
```

### Highlighted-primary

```jsx
<Button variant="primary">Primary</Button>
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

## BlockButton

`block` property will make the button fit to its parent width.

```jsx
<>
  <Button variant="standard" block>Standard</Button>
  <Button variant="primary" block>Primary</Button>
</>
```

## As

You can use `as` to change the type of DOM tag.

```jsx
<Button as="a" href="#">As a</Button>
```
