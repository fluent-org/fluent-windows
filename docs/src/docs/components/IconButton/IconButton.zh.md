---
title: IconButton（标签按钮）
components: IconButton
type: Inputs
langKey: "zh"
---

# IconButtons（标签按钮）

<p class="description">图标按钮通常出现在应用程序栏和工具栏中。</p>

## Variant

有两种类型的按钮，由 `variant` 控制。

- standard
- primary

### 默认-standard

```jsx
<IconButton>
  <Icon.CheckLine />
</IconButton>
```

### 高亮-primary

```jsx
<IconButton variant="primary">
  <Icon.CheckLine />
</IconButton>
```

## Disabled

是否禁用按钮

```jsx
<IconButton disabled>
  <Icon.CheckLine />
</IconButton>
```

## Sizes

喜欢大按钮还是小按钮？使用 `size` 属性。

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

你可以使用 `as` 来改变按钮最终渲染的 DOM 标签类别。

```jsx
<IconButton as="a" href="#">
  <Icon.CheckLine />
</IconButton>
```
