import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ThemeProvider, Table } from '../..'
import { ColumnsType, DataType } from '../Table.type'

interface Data extends DataType {
  name: React.ReactText
  surname: React.ReactText
  birthYear: React.ReactText
  birthCity: React.ReactText
}

describe('Table', (): void => {
  const theme = {}
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
    const component = renderer.create(
      <ThemeProvider theme={theme}>
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
            {data.map(
              (row): React.ReactElement => (
                <Table.Row key={row.key}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.surname}</Table.Cell>
                  <Table.Cell>{row.birthYear}</Table.Cell>
                  <Table.Cell>{row.birthCity}</Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('prop column', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Table<Data> columns={columns} data={data} />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
