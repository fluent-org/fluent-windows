---
title: useMessage（函数式调用信息组件）
hooks: useMessage
type: hooks
langKey: "zh"
---

# useMessage

<p class="description">函数式调用 React 信息类组件</p>

## 例子

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
