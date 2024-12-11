import {useMemo} from 'react'
import {UNSTABLE_ListLayout, useDragAndDrop} from 'react-aria-components'
import {UNSTABLE_Virtualizer} from 'react-aria-components'
import {useListData} from 'react-stately'
import {GridList, GridListItem} from '../src/todo/GridList.tsx'

export const Example = (args: any) => {
  const list = useListData({
    initialItems: Array.from({length: 10_000}, (_, i) => ({
      key: i.toString(),
      name: `Item ${i + 1}`
    }))
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
  const layout = useMemo(() => {
    return new UNSTABLE_ListLayout({
      rowHeight: 25
    })
  }, [])
  return (
    <UNSTABLE_Virtualizer layout={layout}>
      <GridList
        aria-label="Reorderable list"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {item => <GridListItem>{item.name}</GridListItem>}
      </GridList>
    </UNSTABLE_Virtualizer>
  )
}
