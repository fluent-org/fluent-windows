---
title: Table
components: Table
api: true
langKey: "en"
---

## API

```
import Table from '@fluent-ui/core/Table'
import { TableGroup } from '@fluent-ui/core/Table'
// or
import { Table, TableGroup } from '@fluent-ui/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | React.ReactElement &or; React.ReactElement[] |  | Display the content without `columns`. |
| data | any[] |  | Data of the table. |
| columns | ColumnsType[] |  | If you specify `columns`, the content of `children` will not be displayed. Please see below. |

#### ColumnsType

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| field&nbsp;* | string |  | Uniquely identifies. |
| title&nbsp;* | string |  | Title of the table. |
| render | (text: React.ReactText, record?: T, index?: number) => React.ReactElement |  | Render function for complex situations, which will be applied to the cell corresponding to each `field`(The parameters are expressed as: current cell value, current row data, current row index). |

#### UsedInTypeScript

It's worth noting that in order to support typescript more friendly, I gave up `React.forwardRef`, which means that using `ref` for the `Table` won't get what you want.

```tsx
import { ColumnsType, DataType } from '@fluent-ui/core/Table'

interface Data extends DataType {
  name: React.ReactText
  surname: React.ReactText
  birthYear: React.ReactText
  birthCity: React.ReactText
}

const data: Data[] = [
  { key: '1', name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 22 },
  { key: '2', name: 'John', surname: 'Brown', birthYear: 1977, birthCity: 32 },
  { key: '3', name: 'Jim', surname: 'Black', birthYear: 1997, birthCity: 14 }
]

const columns: ColumnsType<Data>[] = [
  {
    title: 'Name',
    field: 'name',
    render: (text: React.ReactText): React.ReactElement => <a href="#">{text}</a> // eslint-disable-line
  },
  { title: 'Surname', field: 'surname' },
  { title: 'BirthYear', field: 'birthYear' },
  {
    title: 'BirthCity',
    field: 'birthCity'
  }
]

<Table<Data> columns={columns} data={data} />
```
