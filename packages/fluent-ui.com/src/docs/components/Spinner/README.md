---
title: Spinner
components: Spinner
type: Feedback
---

# Spinner

## Size

```jsx
<>
  <Spinner size="small" />
  <Spinner size="medium" />
  <Spinner size="large" />
</>
```

## LabelPosition

```jsx
<>
  <Box textAlign="center">
    <Typography variant="subtitle2" style={{ textAlign: 'center' }}>Spinner with label positioned below</Typography>
    <FormLabel label="Top Label" position="top"><Spinner /></FormLabel>
  </Box>
  <Box textAlign="center">
    <Typography variant="subtitle2" style={{ textAlign: 'center' }}>Spinner with label positioned above</Typography>
    <FormLabel label="Bottom Label" position="bottom"><Spinner /></FormLabel>
  </Box>
  <Box textAlign="center">
    <Typography variant="subtitle2" style={{ textAlign: 'center' }}>Spinner with label positioned to right</Typography>
    <FormLabel label="Left Label" position="left"><Spinner /></FormLabel>
  </Box>
  <Box textAlign="center">
    <Typography variant="subtitle2" style={{ textAlign: 'center' }}>Spinner with label positioned to left</Typography>
    <FormLabel label="Right Label" position="right"><Spinner /></FormLabel>
  </Box>
</>
```
