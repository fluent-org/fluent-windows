import * as React from 'react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Table, { name } from '../Table'
import { TableGroup } from '../TableGroup'
import { styles } from '../Table.styled'
import { TableClassProps } from '../Table.type'

const classes = getClasses<TableClassProps>(styles, name)
import { ColumnsType, DataType } from '../Table.type'

interface Data extends DataType {
  name: React.ReactText
  surname: React.ReactText
  birthYear: React.ReactText
  birthCity: React.ReactText
}

describe('Table', (): void => {
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

  test('basic', (): void => {
    const { container } = render(
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
          {data.map(
            (row): React.ReactElement => (
              <TableGroup.Row key={row.key}>
                <TableGroup.Cell>{row.name}</TableGroup.Cell>
                <TableGroup.Cell>{row.surname}</TableGroup.Cell>
                <TableGroup.Cell>{row.birthYear}</TableGroup.Cell>
                <TableGroup.Cell>{row.birthCity}</TableGroup.Cell>
              </TableGroup.Row>
            )
          )}
        </TableGroup.Body>
      </Table>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass(classes.root)
  })

  test('should support column', (): void => {
    const { container } = render(<Table<Data> columns={columns} data={data} />)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass(classes.root)
  })
})
