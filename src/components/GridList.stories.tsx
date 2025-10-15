import {useDragAndDrop} from 'react-aria-components'
import {useListData} from 'react-stately'
import {GridList, GridListItem} from './GridList.tsx'
import {TextField} from './TextField.tsx'

export const Example = (args: any) => {
  const list = useListData({
    initialItems: Array.from({length: 50}, (_, i) => ({
      key: i.toString(),
      name: `Item ${i + 1}`
    }))
  })

  const {dragAndDropHooks} = useDragAndDrop({
    onDragStart(e) {
      console.log(e)
    },
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
        <GridListItem>
          <div
            // The main content area should not trigger a drag
            onDragStart={e => {
              // Prevent the browser's native drag operation from starting on the content.
              e.preventDefault()
              e.stopPropagation() // Stop event from bubbling up in case the whole item is listening
              return false
            }}
          >
            <TextField label="Name" defaultValue={item.name} />
          </div>
        </GridListItem>
      )}
    </GridList>
  )
}

export default {title: 'Components / GridList'}
