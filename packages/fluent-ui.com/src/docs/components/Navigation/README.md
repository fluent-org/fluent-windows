---
title: Navigation
components: Navigation
type: Navigation
---

# Navigation

<p class="description">The vertical navigation view control provides a collapsible upright navigation menu for top-level sections within the app.</p>

## Controlled

```jsx
() => {
  const [activeId, setActiveId] = React.useState(1)
  function handleActiveId(id) {
    setActiveId(id)
  }
  return (
    <Navigation height={600} value={activeId} onChange={handleActiveId}>
      <Navigation.Header>
        <Navigation.Item>
          <Icon.GlobalNavigationButton />
        </Navigation.Item>
      </Navigation.Header>

      <Navigation.Item id={1}>
        <Icon.Connected />
        <span>Option 1</span>
      </Navigation.Item>
      <Navigation.Item id={2}>
        <Icon.Connected />
        <span>Option 2</span>
      </Navigation.Item>
      <Navigation.Item id={3}>
        <Icon.Connected />
        <span>Option 3</span>
      </Navigation.Item>
      <Navigation.Item id={4}>
        <Icon.Connected />
        <span>Option 4</span>
      </Navigation.Item>

      <Navigation.Footer>
        <Navigation.Item>
          <Icon.Settings />
          <span>Settings</span>
        </Navigation.Item>
      </Navigation.Footer>
    </Navigation>
  )
}
```

## expanded

```jsx
() => {
  const [activeId, setActiveId] = React.useState(1)
  function handleActiveId(id) {
    setActiveId(id)
  }
  const [expanded, setExpanded] = React.useState(true)
  function handleExpanded() {
    setExpanded(e => !e)
  }
  return (
    <>
      <Button onClick={handleExpanded}>toggle</Button>
      <Navigation height={600} value={activeId} onChange={handleActiveId} expanded={expanded}>
        <Navigation.Header>
          <Navigation.Item>
            <Icon.GlobalNavigationButton />
          </Navigation.Item>
        </Navigation.Header>

        <Navigation.Item id={1}>
          <Icon.Connected />
          <span>Option 1</span>
        </Navigation.Item>
        <Navigation.Item id={2}>
          <Icon.Connected />
          <span>Option 2</span>
        </Navigation.Item>
        <Navigation.Item id={3}>
          <Icon.Connected />
          <span>Option 3</span>
        </Navigation.Item>
        <Navigation.Item id={4}>
          <Icon.Connected />
          <span>Option 4</span>
        </Navigation.Item>

        <Navigation.Footer>
          <Navigation.Item>
            <Icon.Settings />
            <span>Settings</span>
          </Navigation.Item>
        </Navigation.Footer>
      </Navigation>
    </>
  )
}
```

## Horizontal

```jsx
() => {
  const [activeId, setActiveId] = React.useState(1)
  function handleActiveId(id) {
    setActiveId(id)
  }
  const [expanded, setExpanded] = React.useState(true)
  function handleExpanded() {
    setExpanded(e => !e)
  }
  return (
    <>
      <Button onClick={handleExpanded}>toggle</Button>
      <Navigation horizontal={true} value={activeId} onChange={handleActiveId} expanded={expanded}>
        <Navigation.Header>
          <Navigation.Item>
            <Icon.GlobalNavigationButton />
          </Navigation.Item>
        </Navigation.Header>

        <Navigation.Item id={1}>
          <Icon.Connected />
          <span>Option 1</span>
        </Navigation.Item>
        <Navigation.Item id={2}>
          <Icon.Connected />
          <span>Option 2</span>
        </Navigation.Item>
        <Navigation.Item id={3}>
          <Icon.Connected />
          <span>Option 3</span>
        </Navigation.Item>
        <Navigation.Item id={4}>
          <Icon.Connected />
          <span>Option 4</span>
        </Navigation.Item>

        <Navigation.Footer>
          <Navigation.Item>
            <Icon.Settings />
            <span>Settings</span>
          </Navigation.Item>
        </Navigation.Footer>
      </Navigation>
    </>
  )
}
```

## Acrylic

```jsx
() => {
  const [activeId, setActiveId] = React.useState(1)
  function handleActiveId(id) {
    setActiveId(id)
  }
  const [expanded, setExpanded] = React.useState(true)
  function handleExpanded() {
    setExpanded(e => !e)
  }
  return (
    <Box padding="6em 8em" background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
      <Button onClick={handleExpanded}>toggle</Button>
      <Navigation acrylic={true} height={600} value={activeId} onChange={handleActiveId} expanded={expanded}>
        <Navigation.Header>
          <Navigation.Item>
            <Icon.GlobalNavigationButton />
          </Navigation.Item>
        </Navigation.Header>

        <Navigation.Item id={1}>
          <Icon.Connected />
          <span>Option 1</span>
        </Navigation.Item>
        <Navigation.Item id={2}>
          <Icon.Connected />
          <span>Option 2</span>
        </Navigation.Item>
        <Navigation.Item id={3}>
          <Icon.Connected />
          <span>Option 3</span>
        </Navigation.Item>
        <Navigation.Item id={4}>
          <Icon.Connected />
          <span>Option 4</span>
        </Navigation.Item>

        <Navigation.Footer>
          <Navigation.Item>
            <Icon.Settings />
            <span>Settings</span>
          </Navigation.Item>
        </Navigation.Footer>
      </Navigation>
    </Box>
  )
}
```

## Reveal

```jsx
() => {
  const [activeId, setActiveId] = React.useState(1)
  function handleActiveId(id) {
    setActiveId(id)
  }
  const [expanded, setExpanded] = React.useState(true)
  function handleExpanded() {
    setExpanded(e => !e)
  }
  return (
    <>
      <Button onClick={handleExpanded}>toggle</Button>
      <Navigation reveal={true} height={600} value={activeId} onChange={handleActiveId} expanded={expanded}>
        <Navigation.Header>
          <Navigation.Item>
            <Icon.GlobalNavigationButton />
          </Navigation.Item>
        </Navigation.Header>

        <Navigation.Item id={1}>
          <Icon.Connected />
          <span>Option 1</span>
        </Navigation.Item>
        <Navigation.Item id={2}>
          <Icon.Connected />
          <span>Option 2</span>
        </Navigation.Item>
        <Navigation.Item id={3}>
          <Icon.Connected />
          <span>Option 3</span>
        </Navigation.Item>
        <Navigation.Item id={4}>
          <Icon.Connected />
          <span>Option 4</span>
        </Navigation.Item>

        <Navigation.Footer>
          <Navigation.Item>
            <Icon.Settings />
            <span>Settings</span>
          </Navigation.Item>
        </Navigation.Footer>
      </Navigation>
    </>
  )
}
```
