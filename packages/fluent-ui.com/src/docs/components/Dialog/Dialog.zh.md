---
title: Dialog（对话框）
components: Dialog
type: Feedback
langKey: "zh"
---

# Dialog（对话框）

<p class="description">对话框将一个任务告知给用户，它包含了一些关键信息，需要用户进行确认，或者包含了多个任务。</p>

## 默认

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
