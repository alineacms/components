/** @jsxImportSource ../playwright */
import {expect, test} from '@playwright/experimental-ct-react'
import {EditableTable, type EditableTableValue} from './EditableTable.tsx'

const createValue = (): EditableTableValue => ({
  columns: [
    {id: 'name', label: 'Name'},
    {id: 'qty', label: 'Qty'}
  ],
  rows: [
    {id: 'row-1', cells: ['Apples', '2']},
    {id: 'row-2', cells: ['Oranges', '5']}
  ]
})

test.describe('EditableTable', () => {
  test('supports grid navigation and external editor', async ({mount}) => {
    const component = await mount(
      <EditableTable aria-label="Editable table" defaultValue={createValue()} />
    )

    const cells = component.getByRole('gridcell')
    const firstCell = cells.nth(0)
    const secondCell = cells.nth(1)
    const editor = component.getByLabel('Cell value')

    await firstCell.focus()
    await expect(firstCell).toBeFocused()

    await firstCell.press('ArrowRight')
    await expect(secondCell).toBeFocused()

    await secondCell.press('Enter')
    await expect(editor).toBeFocused()
    await expect(secondCell).toHaveAttribute('data-editing', 'true')

    await editor.fill('10')
    await expect(secondCell).toHaveText('10')

    await editor.press('Tab')
    await expect(secondCell).toBeFocused()
    await expect(secondCell).not.toHaveAttribute('data-editing', 'true')
  })
})
