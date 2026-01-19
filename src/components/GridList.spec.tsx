import {expect, test} from '@playwright/experimental-ct-react'
import {GridList, GridListItem} from '../todo/GridList.tsx'

interface GridItem {
  key: string
  name: string
}

const items: GridItem[] = [
  {key: 'alpha', name: 'Alpha'},
  {key: 'bravo', name: 'Bravo'},
  {key: 'charlie', name: 'Charlie'}
]

test.describe('GridList', () => {
  test('renders items with list styling', async ({mount, page}) => {
    await mount(
      <GridList aria-label="Example grid list">
        {items.map(item => (
          <GridListItem key={item.key} id={item.key} textValue={item.name}>
            {item.name}
          </GridListItem>
        ))}
      </GridList>
    )

    const list = page.locator('.alinea-rac-List')
    await expect(list).toHaveCount(1)
    await expect(list.locator('.alinea-rac-ListItem')).toHaveCount(items.length)
  })

  test('toggles selection', async ({mount, page}) => {
    await mount(
      <GridList
        aria-label="Selectable grid list"
        selectionMode="multiple"
        selectionBehavior="toggle"
      >
        {items.map(item => (
          <GridListItem key={item.key} id={item.key} textValue={item.name}>
            {item.name}
          </GridListItem>
        ))}
      </GridList>
    )

    const firstItem = page.locator('.alinea-rac-ListItem').first()
    const before = await firstItem.getAttribute('data-selected')
    await firstItem.click()
    const after = await firstItem.getAttribute('data-selected')
    expect(after).not.toBe(before)
    await firstItem.click()
    const final = await firstItem.getAttribute('data-selected')
    expect(final).toBe(before)
  })
})
