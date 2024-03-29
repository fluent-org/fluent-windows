---
title: Tooltip
components: Tooltip
type: DataDisplay
langKey: "en"
---

# Tooltip

<p class="description">Tooltips display informative text when users hover over, focus on, or tap an element.</p>

## Simple

```jsx
<>
  <Tooltip title="Add">
    <IconButton>
      <Icon.AddLine />
    </IconButton>
  </Tooltip>
  <Tooltip title="Add">
    <IconButton variant="primary">
      <Icon.AddLine />
    </IconButton>
  </Tooltip>
</>
```

## Positioned

```jsx
<Box overflow="auto">
  <Box width={600} margin="0 auto" padding="40px 0">
    <Box display="flex" justifyContent="center">
      <Tooltip title="Add" placement="top-start">
        <Button>top-start</Button>
      </Tooltip>
      <Box margin="0 5px" />
      <Tooltip title="Add" placement="top">
        <Button>top</Button>
      </Tooltip>
      <Box margin="0 5px" />
      <Tooltip title="Add" placement="top-end">
        <Button>top-end</Button>
      </Tooltip>
    </Box>
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="column">
        <Tooltip title="Add" placement="left-start">
          <Button>left-start</Button>
        </Tooltip>
        <br />
        <Tooltip title="Add" placement="left">
          <Button>left</Button>
        </Tooltip>
        <br />
        <Tooltip title="Add" placement="left-end">
          <Button>left-end</Button>
        </Tooltip>
      </Box>
      <Box display="flex" flexDirection="column">
        <Tooltip title="Add" placement="right-start">
          <Button>right-start</Button>
        </Tooltip>
        <br />
        <Tooltip title="Add" placement="right">
          <Button>right</Button>
        </Tooltip>
        <br />
        <Tooltip title="Add" placement="right-end">
          <Button>right-end</Button>
        </Tooltip>
      </Box>
    </Box>
    <Box display="flex" justifyContent="center">
      <Tooltip title="Add" placement="bottom-start">
        <Button>bottom-start</Button>
      </Tooltip>
      <Box margin="0 5px" />
      <Tooltip title="Add" placement="bottom">
        <Button>bottom</Button>
      </Tooltip>
      <Box margin="0 5px" />
      <Tooltip title="Add" placement="bottom-end">
        <Button>bottom-end</Button>
      </Tooltip>
    </Box>
  </Box>
</Box>
```

## Custom

```jsx
<Tooltip title={
  <Box
    width={50}
    backgroundColor="primary.default"
    color="white.default"
    boxShadow="1"
    textAlign="center"
    zIndex="1001"
  >
    hello
  </Box>
}>
  <Button>HTML</Button>
</Tooltip>
```

## Controlled

```jsx
() => {
  const [visible, setVisible] = React.useState(false)
  function handleVisible(v) {
    setVisible(v)
  }
  return (
    <Tooltip title="Add" visible={visible} onChange={handleVisible}>
      <IconButton>
        <Icon.AddLine />
      </IconButton>
    </Tooltip>
  )
}
```

## Triggers

```jsx
<>
  <Tooltip title="Hovered!" trigger="hover">
    <Button>Hover</Button>
  </Tooltip>
  <Tooltip title="Clicked!" trigger="click">
    <Button>Click</Button>
  </Tooltip>
  <Tooltip title="Touched!" trigger="touch">
    <Button>Touch</Button>
  </Tooltip>
  <Tooltip title="Focused!" trigger="focus">
    <Button>Focus</Button>
  </Tooltip>
</>
```
