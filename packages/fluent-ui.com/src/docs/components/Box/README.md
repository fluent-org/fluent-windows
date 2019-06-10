---
title: Box
components: Box
---

# Box

<p class="description">Box</p>

## Use Acrylic

Backdrop filter is currently baked under CSS Filters Level 2, and at the time of the writing, it only works work in Safari 9 with the `-webkit-` prefix, and Chrome as well as Opera by enabling the “Experimental Web Platform Features” [under the chrome://flags menu](https://webdesign.tutsplus.com/tutorials/css-backdrop-filters--cms-27314).

```jsx
<div style={{
  padding: '6em 8em',
  background: 'url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover'
}}>
  <Box acrylic={true} padding={{ sm: 15, lg: 25 }} color='#fff'>
    Acrylic
  </Box>
</div>
```

## Without Acrylic

```jsx
<div style={{
  padding: '6em 8em',
  background: 'url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover'
}}>
  <Box padding={{ sm: 15, lg: 25 }} color='#fff'>
    Acrylic
  </Box>
</div>
```
