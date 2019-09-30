---
title: useMessage
hooks: useMessage
type: hooks
langKey: "en"
order: 8
---

# useMessage

<p class="description">Information element using functional calls.</p>

## Demo

```tsx
import { useMessage } from '@fluent-ui/hooks'

const [handleOpen, handleClose] = useMessage(
  (visible, content, close) => (
    <Toast
      visible={visible}
      actions={
        <IconButton onClick={close}>
          <Icon.Cancel />
        </IconButton>
      }
    >
      {content}
    </Toast>
  ),
  0
)
function handleClick() {
  handleOpen('hello world!')
}
return (
  <>
    <Button onClick={handleClick}>open</Button>
    <Button onClick={handleClose}>close</Button>
  </>
)
```
