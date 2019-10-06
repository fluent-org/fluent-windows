---
title: Portal
components: Portal
api: true
langKey: "en"
---

## API

```
import Portal from '@fluent-ui/core/Portal'
// or
import { Portal } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children&nbsp;* | React.ReactElement |  | The children to render into the `container`. |
| container | Element &or; (() => Element) &or; null |  | A node, component instance, or function that returns either. The `container` will have the portal children appended to it. By default, it uses the body of the top-level document object, so it's simply `document.body` most of the time. |
| disablePortal | boolean | false | Disable the portal behavior. The children stay within it's parent DOM hierarchy. |
