---
title: Card（卡片）
components: Card
type: DataDisplay
langKey: "zh"
---

# Card（卡片）

<p class="description">卡片包含有关单个主题的内容和操作。</p>

## 默认

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
<Box padding={20} background="url(https://i.loli.net/2019/06/08/5cfb6d5a7456419123.jpg) center/cover fixed">
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
