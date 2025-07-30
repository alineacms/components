import {useDragAndDrop} from 'react-aria-components'
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

export default {
  title: 'Components / Tree'
}
