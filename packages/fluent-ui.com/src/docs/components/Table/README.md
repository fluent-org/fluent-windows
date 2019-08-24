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
      <Table.Head>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Surname</Table.Cell>
          <Table.Cell>BirthYear</Table.Cell>
          <Table.Cell>BirthCity</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map(row => (
          <Table.Row key={row.key}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.surname}</Table.Cell>
            <Table.Cell>{row.birthYear}</Table.Cell>
            <Table.Cell>{row.birthCity}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
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
