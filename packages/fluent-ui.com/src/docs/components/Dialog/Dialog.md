---
title: Dialog
components: Dialog
type: Feedback
langKey: "en"
---

# Dialog

<p class="description">Dialogs are temporary, modal UI overlay that generally provide contextual app information or require user confirmation/input. In most cases, Dialogs block interactions with the web page or application until being explicitly dismissed, and often request</p>

## Default

```jsx
() => {
  const [visible, setVisible] = React.useState(false)
  function handleVisible() {
    setVisible(v => !v)
  }
  return (
    <>
      <Button onClick={handleVisible}>show dialog</Button>

      <Dialog visible={visible} onChange={handleVisible}>
        <Dialog.Title>I am title</Dialog.Title>
        <Dialog.Actions>
          <Button variant="primary" onClick={handleVisible}>
            Save
          </Button>
          <Button onClick={handleVisible}>Cancel</Button>
        </Dialog.Actions>
        <div>I am Content</div>
      </Dialog>
    </>
  )
}
```
