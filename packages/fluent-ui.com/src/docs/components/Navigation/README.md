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
        <Item icon={<Icon.GlobalNavigationButton />} />
      </Navigation.Header>

      <Item id={1} icon={<Icon.Connected />}>
        Option 1
      </Item>
      <Item id={2} icon={<Icon.Connected />}>
        Option 2
      </Item>
      <Item id={3} icon={<Icon.Connected />}>
        Option 3
      </Item>
      <Item id={4} icon={<Icon.Connected />}>
        Option 4
      </Item>

      <Navigation.Footer>
        <Item icon={<Icon.Settings />}>
          Settings
        </Item>
      </Navigation.Footer>
    </Navigation>
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
          <Item icon={<Icon.GlobalNavigationButton />} />
        </Navigation.Header>

        <Item id={1} icon={<Icon.Connected />}>
          Option 1
        </Item>
        <Item id={2} icon={<Icon.Connected />}>
          Option 2
        </Item>
        <Item id={3} icon={<Icon.Connected />}>
          Option 3
        </Item>
        <ItemGroup title="group" icon={<Icon.Connected />}>
          <Item id={4} icon={<Icon.Connected />}>
            Option 4
          </Item>
          <Item id={5} icon={<Icon.Connected />}>
            Option 5
          </Item>
          <ItemGroup title="group inside" icon={<Icon.Connected />}>
            <Item id={7} icon={<Icon.Connected />}>
              Option 7
            </Item>
            <Item id={8} icon={<Icon.Connected />}>
              Option 8
            </Item>
            <ItemGroup title="group inside" icon={<Icon.Connected />}>
              <Item id={9} icon={<Icon.Connected />}>
                Option 9
              </Item>
              <Item id={10} icon={<Icon.Connected />}>
                Option 10
              </Item>
            </ItemGroup>
          </ItemGroup>
        </ItemGroup>

        <Navigation.Footer>
          <Item icon={<Icon.Settings />}>
            Settings
          </Item>
        </Navigation.Footer>
      </Navigation>
    </>
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
          <Item icon={<Icon.GlobalNavigationButton />} />
        </Navigation.Header>

        <Item id={1} icon={<Icon.Connected />}>
          Option 1
        </Item>
        <Item id={2} icon={<Icon.Connected />}>
          Option 2
        </Item>
        <Item id={3} icon={<Icon.Connected />}>
          Option 3
        </Item>
        <Item id={4} icon={<Icon.Connected />}>
          Option 4
        </Item>

        <Navigation.Footer>
          <Item icon={<Icon.Settings />}>
            Settings
          </Item>
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
    <>
      <Button onClick={handleExpanded}>toggle</Button>
      <Box
        background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed"
        padding={10}
      >
        <Navigation acrylic={true} height={600} value={activeId} onChange={handleActiveId} expanded={expanded}>
          <Navigation.Header>
            <Item icon={<Icon.GlobalNavigationButton />} />
          </Navigation.Header>

          <Item id={1} icon={<Icon.Connected />}>
            Option 1
          </Item>
          <Item id={2} icon={<Icon.Connected />}>
            Option 2
          </Item>
          <Item id={3} icon={<Icon.Connected />}>
            Option 3
          </Item>
          <Item id={4} icon={<Icon.Connected />}>
            Option 4
          </Item>

          <Navigation.Footer>
            <Item icon={<Icon.Settings />}>
              Settings
            </Item>
          </Navigation.Footer>
        </Navigation>
      </Box>
    </>
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
          <Item icon={<Icon.GlobalNavigationButton />} />
        </Navigation.Header>

        <Item id={1} icon={<Icon.Connected />}>
          Option 1
        </Item>
        <Item id={2} icon={<Icon.Connected />}>
          Option 2
        </Item>
        <Item id={3} icon={<Icon.Connected />}>
          Option 3
        </Item>
        <Item id={4} icon={<Icon.Connected />}>
          Option 4
        </Item>

        <Navigation.Footer>
          <Item icon={<Icon.Settings />}>
            Settings
          </Item>
        </Navigation.Footer>
      </Navigation>
    </>
  )
}
```

## ItemGroup

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
      <Box
        background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed"
        padding={10}
      >
        <Navigation
          acrylic={true}
          height={600}
          value={activeId}
          onChange={handleActiveId}
          expanded={expanded}
        >
          <Navigation.Header>
            <Item icon={<Icon.GlobalNavigationButton />} />
          </Navigation.Header>
    
          <Item id={1} icon={<Icon.Connected />}>
            Option 1
          </Item>
          <Item id={2} icon={<Icon.Connected />}>
            Option 2
          </Item>
          <Item id={3} icon={<Icon.Connected />}>
            Option 3
          </Item>
          <ItemGroup title="group" icon={<Icon.Connected />}>
            <Item id={4}>
              Option 4
            </Item>
            <Item id={5}>
              Option 5
            </Item>
            <ItemGroup title="group inside">
              <Item id={7}>
                Option 7
              </Item>
              <Item id={8}>
                Option 8
              </Item>
              <ItemGroup title="group inside">
                <Item id={9}>
                  Option 9
                </Item>
                <Item id={10}>
                  Option 10
                </Item>
              </ItemGroup>
            </ItemGroup>
          </ItemGroup>
          <Item id={6}>
            Option 6
          </Item>
    
          <Navigation.Footer>
            <Item icon={<Icon.Settings />}>
              Settings
            </Item>
          </Navigation.Footer>
        </Navigation>
      </Box>
    </>
  )
}
```
