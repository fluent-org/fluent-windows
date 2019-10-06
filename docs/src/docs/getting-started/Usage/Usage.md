---
title: Usage
type: getting-started
langKey: "en"
order: 2
---

# Usage

<p class="description">Get started with React and Fluent-UI in no time.</p>

## Quick start

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@fluent-ui/core/Button';
import ThemeProvider from '@fluent-ui/core/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

**Note**: You must provide `ThemeProvider` for the root component, Otherwise it will be wrong

## Normalize

Fluent-UI provides an optional `Normalize` component. It fixes some inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.
It is based on the [normalize.css](https://github.com/necolas/normalize.css)

```jsx
import ThemeProvider, { Normalize } from '@fluent-ui/core/ThemeProvider';

function Layout({ children }) {
  return (
    <ThemeProvider>
      <Normalize />
      {children}
    </ThemeProvider>
  );
}
```
