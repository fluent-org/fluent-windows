---
title: Box
components: Box
type: Layout
---

# Box

<p class="description">The Box component serves as a wrapper component for most of the CSS utility needs, Powered by <a href="https://github.com/smooth-code/xstyled">xstyled</a></p>

You can browse this document to get the available props

## Default

```jsx
<Box padding={{ sm: 15, lg: 25 }}>
  <Button style={{margin: 5}}>Button 1</Button>
  <Button style={{margin: 5}}>Button 2</Button>
  <Button style={{margin: 5}}>Button 3</Button>
</Box>
```

## Acrylic

In addition to the capabilities that xstyled brings to us, we have implemented an additional [acrylic](https://docs.microsoft.com/en-us/windows/uwp/design/style/acrylic) prop.

We implemented acrylic with `backdrop-filter`, but it is not compatible, we are looking for other solutions.

> Backdrop filter is currently baked under CSS Filters Level 2, and at the time of the writing, it only works work in Safari 9 with the `-webkit-` prefix, and Chrome as well as Opera by enabling the “Experimental Web Platform Features” [under the chrome://flags menu](https://webdesign.tutsplus.com/tutorials/css-backdrop-filters--cms-27314).

```jsx
<Box padding={20} background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
  <Box acrylic={true} padding={{ xs: 15, sm: 25 }}>
    Acrylic
  </Box>
</Box>
```
