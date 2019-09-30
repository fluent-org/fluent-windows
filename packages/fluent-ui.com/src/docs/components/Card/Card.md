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
<Box padding={20} background="url(/images/wall.jpg) center/cover fixed">
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
