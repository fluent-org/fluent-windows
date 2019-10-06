---
title: Card
components: Card
type: DataDisplay
langKey: "en"
---

# Card

<p class="description">Cards contain content and actions about a single subject.</p>

## Default

```jsx
<Card>
  <Card.Header>
    <Typography variant="h6" as="h2">
      News
    </Typography>
  </Card.Header>
  <Card.Content>
    <Typography variant="subtitle1" as="h3" gutterBottom>
      NASA scientists track Greenland’s melting ice, and the findings are not good
    </Typography>
    <Typography variant="subtitle2" color="standard.dark2" gutterBottom>
      MarketWatch · 11 hours ago
    </Typography>
  </Card.Content>
  <Card.Actions>
    <Button size="small">Learn More</Button>
  </Card.Actions>
</Card>
```

## Acrylic Card

```jsx
<Box padding={20} background={`url(${bg}) center/cover fixed`}>
  <Card acrylic>
    <Card.Header>
      <Typography variant="h6" as="h2">
        News
      </Typography>
    </Card.Header>
    <Card.Content>
      <Typography variant="subtitle1" as="h3" gutterBottom>
        NASA scientists track Greenland’s melting ice, and the findings are not good
      </Typography>
      <Typography variant="subtitle2" color="standard.dark2" gutterBottom>
        MarketWatch · 11 hours ago
      </Typography>
    </Card.Content>
    <Card.Actions>
      <Button size="small">Learn More</Button>
    </Card.Actions>
  </Card>
</Box>
```

## More examples

```jsx
() => {
  const colors = [
    { title: 'Black', bg: 'black.default', color: 'white.default' },
    { title: 'White', bg: 'white.default', color: 'black.default' },
    { title: 'Standard', bg: 'standard.default', color: 'black.default' },
    { title: 'Blue', bg: '#CEE8F0', color: 'black.default' },
    { title: 'Yellow', bg: '#F7EDD2', color: 'black.default' },
    { title: 'LinearGradient', bg: 'linear-gradient(45deg, #83A4D4, #B6FBFF)', color: 'black.default' },
  ]

  return (
    <Box
      padding={20}
      background={`url(${bg}) center/cover fixed`}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
    >
      {
        colors.map(({ title, bg, color }) => (
          <Card acrylic background={bg} color={color} margin="5px" key={title}>
            <Card.Header>
              <Typography variant="h6" as="h2">
                {title}
              </Typography>
            </Card.Header>
            <Card.Content>
              <Typography variant="subtitle1" as="h3" gutterBottom>
                NASA scientists track Greenland’s melting ice, and the findings are not good
              </Typography>
              <Typography variant="subtitle2" color="standard.dark2" gutterBottom>
                MarketWatch · 11 hours ago
              </Typography>
            </Card.Content>
          </Card>
        ))
      }
    </Box>
  )
}
```
