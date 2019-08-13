---
title: Progress
components: Progress
type: Progress
---

# Progress

## Default with value

```jsx
<Progress value={50} />
```

## Controlled

```jsx
() => {
  const [percent, setPercent] = React.useState(0)
  React.useEffect(() => {
    function progress() {
      setPercent(oldCompleted => {
        if (oldCompleted === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldCompleted + diff, 100)
      })
    }

    const timer = setInterval(progress, 500)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Progress value={percent} />
  )
}
```

## Indeterminate

```jsx
<Progress />
```

