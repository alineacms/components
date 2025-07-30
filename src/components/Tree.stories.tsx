import {useTreeData} from '@react-stately/data'
import {Collection, useDragAndDrop} from 'react-aria-components'
import {Tree, TreeItem} from './Tree.tsx'

export function Example() {
  const dnd = useDragAndDrop({})
  return (
    <Tree dragAndDropHooks={dnd.dragAndDropHooks} aria-title="Files">
      <TreeItem title="Documents">
        <TreeItem title="Project">
          <TreeItem title="Weekly Report" />
        </TreeItem>
      </TreeItem>
      <TreeItem title="Photos">
        <TreeItem title="Image 1" />
        <TreeItem title="Image 2" />
      </TreeItem>
    </Tree>
  )
}

interface Item {
  id: string
  title: string
  children?: Item[]
}

const initialItems: Item[] = [
  {
    id: '1',
    title: 'Documents',
    children: [
      {
        id: '2',
        title: 'Project',
        children: [{id: '3', title: 'Weekly Report'}]
      }
    ]
  },
  {
    id: '4',
    title: 'Photos',
    children: [
      {id: '5', title: 'Image 1'},
      {id: '6', title: 'Image 2'}
    ]
  }
]

export function DragNDrop() {
  const tree = useTreeData<Item>({
    initialItems: initialItems,
    getKey: item => item.id,
    getChildren: item => item.children || []
  })

  const {dragAndDropHooks} = useDragAndDrop({
    getItems: keys =>
      [...keys].map(key => ({
        'text/plain': tree.getItem(key).value.title
      })),
    onMove(e) {
      if (e.target.dropPosition === 'before') {
        tree.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === 'after') {
        tree.moveAfter(e.target.key, e.keys)
      } else if (e.target.dropPosition === 'on') {
        // Move items to become children of the target
        const targetNode = tree.getItem(e.target.key)
        if (targetNode) {
          const targetIndex = targetNode.children
            ? targetNode.children.length
            : 0
          const keyArray = Array.from(e.keys)
          for (let i = 0; i < keyArray.length; i++) {
            tree.move(keyArray[i], e.target.key, targetIndex + i)
          }
        }
      }
    }
  })

  return (
    <Tree
      aria-label="File system"
      items={tree.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {function renderItem(item) {
        return (
          <TreeItem title={item.value.title}>
            <Collection items={item.children ?? []}>{renderItem}</Collection>
          </TreeItem>
        )
      }}
    </Tree>
  )
}

export default {
  title: 'Components / Tree'
}
