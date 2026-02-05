import {expect, test} from '@playwright/experimental-ct-react'
import {useMemo} from 'react'
import {useDragAndDrop} from 'react-aria-components'
import {useListData} from 'react-stately'
import {TextField} from '../components/TextField.tsx'
import {GridList, GridListItem} from '../todo/GridList.tsx'

interface Item {
  key: string
  name: string
}

function GridListWithInput() {
  const initialItems = useMemo<Item[]>(
    () =>
      Array.from({length: 3}, (_, i) => ({
        key: i.toString(),
        name: `Item ${i + 1}`
      })),
    []
  )
  const list = useListData({
    initialItems
  })
  const {dragAndDropHooks} = useDragAndDrop({
    getItems: keys =>
      [...keys].map(key => ({'text/plain': list.getItem(key)!.name})),
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys)
      }
    }
  })

  return (
    <GridList
      aria-label="Reorderable list"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {item => (
        <GridListItem id={item.key} textValue={item.name} header={item.name}>
          <TextField label="Text field" placeholder="Type here..." />
        </GridListItem>
      )}
    </GridList>
  )
}

test.describe('GridList', () => {
  test('selecting text in input should not start drag', async ({
    mount,
    page
  }) => {
    const component = await mount(<GridListWithInput />)
    const input = component.getByLabel('Text field')
    await input.click()
    await input.fill('Hello world')

    const box = await input.boundingBox()
    expect(box).not.toBeNull()
    if (!box) return

    const item = component.locator('.alinea-rac-ListItem').first()

    await page.mouse.move(box.x + 6, box.y + box.height / 2)
    await page.mouse.down()
    await page.mouse.move(box.x + box.width - 6, box.y + box.height / 2)

    await expect(item).not.toHaveAttribute('data-dragging', /.+/)
    await page.mouse.up()
  })
})
