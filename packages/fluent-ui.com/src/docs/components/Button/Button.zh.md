---
title: Button（按钮）
components: Button
type: Inputs
langKey: "zh"
---

# Buttons（按钮）

<p class="description">Button 传达用户可以执行的操作。他们通常直接放置在您的用户界面中。</p>

## Variant

有两种类型的按钮，由 `variant` 控制。

- standard
- primary

### 默认-standard

```jsx
<Button>Standard</Button>
```

### 高亮-primary

```jsx
<Button variant="primary">Primary</Button>
```

## Disabled

是否禁用按钮

```jsx
<Button disabled>Disabled</Button>
```

## Sizes

喜欢大按钮还是小按钮？使用 `size` 属性。

```jsx
<>
  <Button size="small">small</Button>
  <Button size="medium">medium</Button>
  <Button size="large">large</Button>
</>
```

## BlockButton

`block` 将使按钮适合其父元素的宽度。

```jsx
<>
  <Button variant="standard" block>Standard</Button>
  <Button variant="primary" block>Primary</Button>
</>
```

## As

你可以使用 `as` 来改变按钮最终渲染的 DOM 标签类别。

```jsx
<Button as="a" href="#">As a</Button>
```

## 幽灵按钮

```jsx
<Box padding={20} background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
  <Button ghost>Ghost</Button>
</Box>
```
