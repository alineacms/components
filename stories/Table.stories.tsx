import {useAsyncList} from 'react-stately'
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader
} from '../src/components/Table.tsx'
import {Stack} from './Stack.tsx'

export const Example = () => (
  <Stack gap={32}>
    <Table aria-label="Table" striped>
      {columns?.length > 0 && (
        <TableHeader>
          {columns.map(column => (
            <Column isRowHeader key={column.id}>
              {column.title}
            </Column>
          ))}
        </TableHeader>
      )}
      <TableBody renderEmptyState={() => <p>No results found.</p>}>
        {items?.length > 0 &&
          items.map(item => (
            <Row key={item.id}>
              <Cell>{item.name}</Cell>
              <Cell>{item.type}</Cell>
              <Cell>{item.date_modified}</Cell>
            </Row>
          ))}
      </TableBody>
    </Table>
    <Table aria-label="Table" style={{width: '100%'}}>
      <TableHeader>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
        <Column>Date Modified</Column>
      </TableHeader>
      <TableBody renderEmptyState={() => <p>No results found.</p>}>
        {items?.length > 0 &&
          items.map(item => (
            <Row key={item.id}>
              <Cell>{item.name}</Cell>
              <Cell>{item.type}</Cell>
              <Cell>{item.date_modified}</Cell>
            </Row>
          ))}
      </TableBody>
    </Table>
  </Stack>
)

export const Selection = () => (
  <Table aria-label="Table" selectionMode="multiple">
    {columns?.length > 0 && (
      <TableHeader>
        {columns.map(column => (
          <Column isRowHeader key={column.id}>
            {column.title}
          </Column>
        ))}
      </TableHeader>
    )}
    <TableBody renderEmptyState={() => <p>No results found.</p>}>
      {items?.length > 0 &&
        items.map(item => (
          <Row key={item.id}>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
            <Cell>{item.date_modified}</Cell>
          </Row>
        ))}
    </TableBody>
  </Table>
)

type TableItem = {
  id: string
  name: string
  type: string
  date_modified: string
}

export const Sorting = () => {
  const list = useAsyncList<TableItem>({
    async load() {
      return {items}
    },
    async sort({items, sortDescriptor}) {
      return {
        items: items.sort((a, b) => {
          const first = a[sortDescriptor.column as keyof TableItem]
          const second = b[sortDescriptor.column as keyof TableItem]
          let cmp =
            (Number.parseInt(first) || first) <
            (Number.parseInt(second) || second)
              ? -1
              : 1
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1
          }
          return cmp
        })
      }
    }
  })
  return (
    <Table
      aria-label="Table"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
    >
      {columns?.length > 0 && (
        <TableHeader>
          {columns.map(column => (
            <Column id={column.id} isRowHeader allowsSorting key={column.id}>
              {column.title}
            </Column>
          ))}
        </TableHeader>
      )}
      <TableBody
        items={list.items}
        renderEmptyState={() => <p>No results found.</p>}
      >
        {item => (
          <Row id={item.name} key={item.id}>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
            <Cell>{item.date_modified}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  )
}

const columns = [
  {id: 'name', title: 'Name', allowSorting: true},
  {id: 'type', title: 'Type', allowSorting: true},
  {id: 'date_modified', title: 'Date Modified', allowSorting: true}
]

const items = [
  {id: 'games', name: 'Games', type: 'File folder', date_modified: '6/7/2020'},
  {
    id: 'program_files',
    name: 'Program Files',
    type: 'File folder',
    date_modified: '4/7/2021'
  },
  {
    id: 'bootmgr',
    name: 'Bootmgr',
    type: 'System file',
    date_modified: '11/20/2010'
  }
]
