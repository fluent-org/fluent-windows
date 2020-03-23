---
title: Drawer（抽屉）
components: Drawer
api: true
langKey: "zh"
---

## API

```
import Drawer from '@fluent-windows/core/Drawer'
// or
import { Drawer } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | React.ReactElement |  | `Drawer` 的内容。 |
| visible&nbsp;* | boolean |  | 	如果 `true`, `Drawer` 将会显示。 |
| onChange | (visible: boolean) => void |  | `Drawer` 显示状态改变时的回调。 |
| anchor | 'left' &or; 'top' &or; 'right' &or; 'bottom' | 'left' | `Drawer` 渲染的位置 |
