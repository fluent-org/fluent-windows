---
title: Box
components: Box
type: Layout
langKey: "en"
---

# Box

<p class="description">The Box component serves as a wrapper component for most of the CSS utility needs, Powered by <a href="https://styled-system.com/">styled-system</a></p>

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

Please use the chrome browser, if the chrome browser incompatibility, please follow the following settings.

> Backdrop filter is currently baked under CSS Filters Level 2, and at the time of the writing, it only works work in Safari 9 with the `-webkit-` prefix, and Chrome as well as Opera by enabling the “Experimental Web Platform Features” [under the chrome://flags menu](https://webdesign.tutsplus.com/tutorials/css-backdrop-filters--cms-27314).
> 
> Chrome77 supported by default check yourself upgrade your browser

```jsx
<Box padding={20} background={`url(${bg}) center/cover fixed`}>
  <Box acrylic={true} padding={[15, 25]}>
    Acrylic
  </Box>
</Box>
```
