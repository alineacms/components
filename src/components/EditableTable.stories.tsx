import {useState} from 'react'
import {Stack} from '../stories/Stack.tsx'
import {
  EditableTable,
  type EditableTableValue
} from './EditableTable.tsx'

const initialValue: EditableTableValue = {
  columns: [
    {id: 'name', label: 'Name'},
    {id: 'qty', label: 'Qty'},
    {id: 'notes', label: 'Notes'}
  ],
  rows: [
    {id: 'row-1', cells: ['Apples', '12', 'Gala']},
    {id: 'row-2', cells: ['Oranges', '8', 'Valencia']},
    {id: 'row-3', cells: ['Bananas', '5', 'Ripe']}
  ]
}

export const Example = () => (
  <Stack gap={24}>
    <EditableTable aria-label="Editable table" label="Inventory" />
    <EditableTable
      aria-label="Editable table with stripes"
      label="Striped"
      striped
    />
  </Stack>
)

export const Controlled = () => {
  const [value, setValue] = useState<EditableTableValue>(initialValue)
  return (
    <Stack gap={16}>
      <EditableTable
        aria-label="Controlled editable table"
        label="Controlled"
        value={value}
        onChange={setValue}
      />
      <pre style={{margin: 0, fontSize: 12}}>
        {JSON.stringify(value, null, 2)}
      </pre>
    </Stack>
  )
}

export default {
  title: 'Components / EditableTable'
}
