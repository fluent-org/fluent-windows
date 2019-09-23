---
title: Navigation
components: Navigation
type: Navigation
langKey: "en"
---

# Navigation

<p class="description">The vertical navigation view control provides a collapsible upright navigation menu for top-level sections within the app.</p>

## Controlled

```jsx
() => {
  const [activeId, setActiveId] = React.useState(1)
  function handleActiveId(value) {
    setActiveId(value)
  }
  return (
    <Navigation height={600} value={activeId} onChange={handleActiveId}>
      <Navigation.Header>
        <Item prefix={<Icon.MenuLine />} />
      </Navigation.Header>

      <Item value={1} prefix={<Icon.MenuLine />}>
        Option 1
      </Item>
      <Item value={2} prefix={<Icon.MenuLine />}>
        Option 2
      </Item>
      <Item value={3} prefix={<Icon.MenuLine />}>
        Option 3
      </Item>
      <Item value={4} prefix={<Icon.MenuLine />}>
        Option 4
      </Item>

      <Navigation.Footer>
        <Item prefix={<Icon.Settings4Line />}>
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
  function handleActiveId(value) {
    setActiveId(value)
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
          <Item prefix={<Icon.MenuLine />} />
        </Navigation.Header>

        <Item value={1} prefix={<Icon.MenuLine />}>
          Option 1
        </Item>
        <Item value={2} prefix={<Icon.MenuLine />}>
          Option 2
        </Item>
        <Item value={3} prefix={<Icon.MenuLine />}>
          Option 3
        </Item>
        <ItemGroup title="group" prefix={<Icon.MenuLine />}>
          <Item value={4} prefix={<Icon.MenuLine />}>
            Option 4
          </Item>
          <Item value={5} prefix={<Icon.MenuLine />}>
            Option 5
          </Item>
          <ItemGroup title="group inside" prefix={<Icon.MenuLine />}>
            <Item value={7} prefix={<Icon.MenuLine />}>
              Option 7
            </Item>
            <Item value={8} prefix={<Icon.MenuLine />}>
              Option 8
            </Item>
            <ItemGroup title="group inside" prefix={<Icon.MenuLine />}>
              <Item value={9} prefix={<Icon.MenuLine />}>
                Option 9
              </Item>
              <Item value={10} prefix={<Icon.MenuLine />}>
                Option 10
              </Item>
            </ItemGroup>
          </ItemGroup>
        </ItemGroup>

        <Navigation.Footer>
          <Item prefix={<Icon.Settings4Line />}>
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
  function handleActiveId(value) {
    setActiveId(value)
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
          <Item prefix={<Icon.MenuLine />} />
        </Navigation.Header>

        <Item value={1} prefix={<Icon.MenuLine />}>
          Option 1
        </Item>
        <Item value={2} prefix={<Icon.MenuLine />}>
          Option 2
        </Item>
        <Item value={3} prefix={<Icon.MenuLine />}>
          Option 3
        </Item>
        <Item value={4} prefix={<Icon.MenuLine />}>
          Option 4
        </Item>

        <Navigation.Footer>
          <Item prefix={<Icon.Settings4Line />}>
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
  function handleActiveId(value) {
    setActiveId(value)
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
            <Item prefix={<Icon.MenuLine />} />
          </Navigation.Header>

          <Item value={1} prefix={<Icon.MenuLine />}>
            Option 1
          </Item>
          <Item value={2} prefix={<Icon.MenuLine />}>
            Option 2
          </Item>
          <Item value={3} prefix={<Icon.MenuLine />}>
            Option 3
          </Item>
          <Item value={4} prefix={<Icon.MenuLine />}>
            Option 4
          </Item>

          <Navigation.Footer>
            <Item prefix={<Icon.Settings4Line />}>
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
  function handleActiveId(value) {
    setActiveId(value)
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
          <Item prefix={<Icon.MenuLine />} />
        </Navigation.Header>

        <Item value={1} prefix={<Icon.MenuLine />}>
          Option 1
        </Item>
        <Item value={2} prefix={<Icon.MenuLine />}>
          Option 2
        </Item>
        <Item value={3} prefix={<Icon.MenuLine />}>
          Option 3
        </Item>
        <Item value={4} prefix={<Icon.MenuLine />}>
          Option 4
        </Item>

        <Navigation.Footer>
          <Item prefix={<Icon.Settings4Line />}>
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
  function handleActiveId(value) {
    setActiveId(value)
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
            <Item prefix={<Icon.MenuLine />} />
          </Navigation.Header>
    
          <Item value={1} prefix={<Icon.MenuLine />}>
            Option 1
          </Item>
          <Item value={2} prefix={<Icon.MenuLine />}>
            Option 2
          </Item>
          <Item value={3} prefix={<Icon.MenuLine />}>
            Option 3
          </Item>
          <ItemGroup title="group" prefix={<Icon.MenuLine />}>
            <Item value={4}>
              Option 4
            </Item>
            <Item value={5}>
              Option 5
            </Item>
            <ItemGroup title="group inside">
              <Item value={7}>
                Option 7
              </Item>
              <Item value={8}>
                Option 8
              </Item>
              <ItemGroup title="group inside">
                <Item value={9}>
                  Option 9
                </Item>
                <Item value={10}>
                  Option 10
                </Item>
              </ItemGroup>
            </ItemGroup>
          </ItemGroup>
          <Item value={6}>
            Option 6
          </Item>
    
          <Navigation.Footer>
            <Item prefix={<Icon.Settings4Line4Line />}>
              Settings
            </Item>
          </Navigation.Footer>
        </Navigation>
      </Box>
    </>
  )
}
```
