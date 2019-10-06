---
title: theme
type: getting-started
langKey: "en"
order: 3
---

# theme

<p class="description">[`styled-system`](https://styled-system.com/) based theme system.</p>

## Default Theme

<ThemeTemplate />

## Custom

You can change the **default theme** by passing `theme` for the `ThemeProvider`

```jsx
import ThemeProvider from '@fluent-ui/core/ThemeProvider';

const theme = {
  colors: {
    primary: {
      default: '#006666'
    }
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="primary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}
```

If you can write using Typescript:

```tsx
import * as React from 'react';
import ThemeProvider from '@fluent-ui/core/ThemeProvider';
import { Theme } from '@fluent-ui/core'

const theme: Theme = {
  colors: {
    primary: {
      default: '#006666'
    }
  }
}

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="primary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}
```
