---
title: Navigation
components: Navigation
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
          <Icon type="GlobalNavigationButton" />
        </Navigation.Item>
      </Navigation.Header>

      <Navigation.Item id={1}>
        <Icon type="Connected" />
        <span>Option 1</span>
      </Navigation.Item>
      <Navigation.Item id={2}>
        <Icon type="Connected" />
        <span>Option 2</span>
      </Navigation.Item>
      <Navigation.Item id={3}>
        <Icon type="Connected" />
        <span>Option 3</span>
      </Navigation.Item>
      <Navigation.Item id={4}>
        <Icon type="Connected" />
        <span>Option 4</span>
      </Navigation.Item>

      <Navigation.Footer>
        <Navigation.Item>
          <Icon type="Settings" />
          <span>Settings</span>
        </Navigation.Item>
      </Navigation.Footer>
    </Navigation>
  )
}
```
