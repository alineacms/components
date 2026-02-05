import {useMemo} from 'react'
import {useDragAndDrop} from 'react-aria-components'
import {useListData} from 'react-stately'
import {TextField} from '../components/TextField.tsx'
import {GridList, GridListItem} from './GridList.tsx'

interface Item {
  key: string
  name: string
}

export function GridListWithInput() {
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
