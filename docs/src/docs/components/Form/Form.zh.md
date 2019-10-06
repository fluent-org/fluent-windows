---
title: Form（表单）
components: Form
type: Inputs
langKey: "zh"
---

# Form（表单）

## 简单的 Form

```jsx
() => {
  function handleSubmit(value, errors) {
    console.log(value, errors)
  }
  const initialState = {
    user: '',
    password: ''
  }
  return (
    <Form
      initialState={initialState}
      onSubmit={handleSubmit}
      suffix={
        <Button variant="primary" block>
          Log in
        </Button>
      }
    >
      <Form.Field
        label="User"
        name="user"
        rules={[
          {
            required: true,
            message: 'Please input your username!'
          },
          {
            min: 5,
            message: 'At least 5 characters!'
          },
          {
            max: 12,
            message: 'Up to 12 characters!'
          }
        ]}
      >
        <Input />
      </Form.Field>
      <Form.Field
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          },
          {
            min: 5,
            message: 'At least 5 characters!'
          },
          {
            max: 12,
            message: 'Up to 12 characters!'
          }
        ]}
      >
        <Input password />
      </Form.Field>
    </Form>
  )
}
```
