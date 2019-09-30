---
title: Box（分组）
components: Box
type: Layout
langKey: "zh"
---

# Box（分组）

<p class="description">Box 组件可封装您的组件并且实现大部分 CSS 需求。基于 <a href="https://styled-system.com/">styled-system</a></p>

你可以浏览此网站来获取可用的 props

## 基本例子

```jsx
<Box padding={{ sm: 15, lg: 25 }}>
  <Button style={{margin: 5}}>Button 1</Button>
  <Button style={{margin: 5}}>Button 2</Button>
  <Button style={{margin: 5}}>Button 3</Button>
</Box>
```

## Acrylic

请使用Chrome浏览器，如Chrome浏览器不兼容，请遵循以下设置。

> Chrome 和 Opera 通过开启选项 “Experimental Web Platform Features” [在Chrome地址栏输入 chrome://flags](https://webdesign.tutsplus.com/tutorials/css-backdrop-filters--cms-27314)。
> 
> Chrome77 默认支持 请自行检查升级浏览器

```jsx
<Box padding={20} background="url(/images/wall.jpg) center/cover fixed">
  <Box acrylic={true} padding={[15, 25]}>
    Acrylic
  </Box>
</Box>
```
