import {
  Tree as AriaTree,
  TreeItem as AriaTreeItem,
  TreeItemContent as AriaTreeItemContent,
  type TreeItemProps as AriaTreeItemProps,
  Button,
  type TreeItemContentProps,
  type TreeItemContentRenderProps,
  type TreeProps
} from 'react-aria-components'
import {Checkbox} from '../components/Checkbox.tsx'
import {IcRoundKeyboardArrowDown} from '../stories/icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowRight} from '../stories/icons/IcRoundKeyboardArrowRight.tsx'
import './Tree.css'

export function Tree<T extends object>(props: TreeProps<T>) {
  return <AriaTree className="alinea-Tree" {...props} />
}

export interface TreeItemProps extends Partial<AriaTreeItemProps> {
  title: string
}

export function TreeItem(props: TreeItemProps) {
  return (
    <AriaTreeItem textValue={props.title} {...props}>
      <TreeItemContent>{props.title}</TreeItemContent>
      {props.children}
    </AriaTreeItem>
  )
}

function TreeItemContent(
  props: Omit<TreeItemContentProps, 'children'> & {children?: React.ReactNode}
) {
  return (
    <AriaTreeItemContent>
      {({
        selectionBehavior,
        selectionMode,
        isExpanded
      }: TreeItemContentRenderProps) => (
        <div className="alinea-TreeItem">
          {selectionBehavior === 'toggle' && selectionMode !== 'none' && (
            <Checkbox slot="selection" />
          )}
          <Button slot="chevron" className="alinea-TreeItem-icon">
            {isExpanded ? (
              <IcRoundKeyboardArrowDown style={{flexShrink: 0}} />
            ) : (
              <IcRoundKeyboardArrowRight style={{flexShrink: 0}} />
            )}
          </Button>
          {props.children}
        </div>
      )}
    </AriaTreeItemContent>
  )
}
