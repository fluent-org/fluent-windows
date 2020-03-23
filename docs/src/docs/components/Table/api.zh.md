---
title: Table（表格）
components: Table
api: true
langKey: "zh"
---

## API

```
import Table from '@fluent-windows/core/Table'
import { TableGroup } from '@fluent-windows/core/Table'
// or
import { Table, TableGroup } from '@fluent-windows/core'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | React.ReactElement &or; React.ReactElement[] |  | `Table` 展示的内容，不能与 columns 同时存在。 |
| data | any[] |  | 数据源。 |
| columns | ColumnsType[] |  | 注意：如果使用 `columns`, `children` 的内容将不会展示。 |

#### ColumnsType

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| field&nbsp;* | string |  | 唯一标识。 |
| title&nbsp;* | string |  | 表格的标题。 |
| render | (text: React.ReactText, record?: T, index?: number) => React.ReactElement |  | 复杂情况下的渲染函数，将应用于每个 `field` 对应的单元格（参数表示为: 当前单元格值、当前行数据、当前行索引）。 |

#### 使用TypeScript

为了更友好地支持typescript，我放弃了 `React.forwardRef`，这意味着 `Table` 组件不能正常使用 `ref`。

```tsx
import { ColumnsType, DataType } from '@fluent-windows/core/Table'

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
