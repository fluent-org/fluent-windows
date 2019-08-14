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

## Label

```jsx
<Spinner label="wait..." />
```

## LabelPosition

```jsx
<>
  <Typography variant="subtitle2" style={{ textAlign: 'center' }}>Spinner with label positioned below</Typography>
  <Spinner label="Top Label" labelPosition="top" />
  <Typography variant="subtitle2" style={{ textAlign: 'center' }}>Spinner with label positioned above</Typography>
  <Spinner label="Bottom Label" labelPosition="bottom" />
  <Typography variant="subtitle2" style={{ textAlign: 'center' }}>Spinner with label positioned to right</Typography>
  <Spinner label="Left Label" labelPosition="left" />
  <Typography variant="subtitle2" style={{ textAlign: 'center' }}>Spinner with label positioned to left</Typography>
  <Spinner label="Right Label" labelPosition="right" />
</>
```
