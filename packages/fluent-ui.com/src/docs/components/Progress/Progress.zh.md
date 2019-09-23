---
title: Progress（进度）
components: Progress
type: Feedback
langKey: "zh"
---

# Progress（进度）

## 默认

```jsx
<Progress value={50} />
```

## 受控的

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

## 不定的

```jsx
<Progress />
```

