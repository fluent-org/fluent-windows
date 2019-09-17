---
title: Table
components: Table
type: DataDisplay
---

# Table

<p class="description">Data tables display sets of data.</p>

## Simple Table

```jsx
() => {
  const data = [
    { key: '1', name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 22 },
    { key: '2', name: 'John', surname: 'Brown', birthYear: 1977, birthCity: 32 },
    { key: '3', name: 'Jim', surname: 'Black', birthYear: 1997, birthCity: 14 }
  ]
  return (
    <Table>
      <TableGroup.Head>
        <TableGroup.Row>
          <TableGroup.Cell>Name</TableGroup.Cell>
          <TableGroup.Cell>Surname</TableGroup.Cell>
          <TableGroup.Cell>BirthYear</TableGroup.Cell>
          <TableGroup.Cell>BirthCity</TableGroup.Cell>
        </TableGroup.Row>
      </TableGroup.Head>
      <TableGroup.Body>
        {data.map(row => (
          <TableGroup.Row key={row.key}>
            <TableGroup.Cell>{row.name}</TableGroup.Cell>
            <TableGroup.Cell>{row.surname}</TableGroup.Cell>
            <TableGroup.Cell>{row.birthYear}</TableGroup.Cell>
            <TableGroup.Cell>{row.birthCity}</TableGroup.Cell>
          </TableGroup.Row>
        ))}
      </TableGroup.Body>
    </Table>
  )
}
```

## With Columns Table

```jsx
() => {
  const columns = [
    {
      title: 'Name',
      field: 'name',
      render: text => <a href="#">{text}</a>
    },
    { title: 'Surname', field: 'surname' },
    { title: 'BirthYear', field: 'birthYear' },
    {
      title: 'BirthCity',
      field: 'birthCity',
    }
  ]
  const data = [
    { key: '1', name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 22 },
    { key: '2', name: 'John', surname: 'Brown', birthYear: 1977, birthCity: 32 },
    { key: '3', name: 'Jim', surname: 'Black', birthYear: 1997, birthCity: 14 }
  ]
  return <Table columns={columns} data={data} />
}
```
