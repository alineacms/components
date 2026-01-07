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
import clsx from 'clsx'
import {Checkbox} from '../components/Checkbox.tsx'

import './Tree.css'

export function Tree<T extends object>(props: TreeProps<T>) {
  return (
    <AriaTree
      {...props}
      className={clsx('alinea-rac-Tree', props.className)}
    />
  )
}

export function TreeItemContent(
  props: Omit<TreeItemContentProps, 'children'> & {children?: React.ReactNode}
) {
  return (
    <AriaTreeItemContent {...props}>
      {({
        selectionBehavior,
        selectionMode,
        allowsDragging
      }: TreeItemContentRenderProps) => (
        <span className="alinea-rac-TreeItemContent">
          {allowsDragging && <Button slot="drag">::</Button>}
          {selectionBehavior === 'toggle' && selectionMode !== 'none' && (
            <Checkbox slot="selection" />
          )}
          <Button slot="chevron">
            <svg
              data-slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                d="M5.2 6.3 8 9.7l2.8-3.4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </Button>
          {props.children}
        </span>
      )}
    </AriaTreeItemContent>
  )
}

export interface TreeItemProps extends Partial<AriaTreeItemProps> {
  title: string
  content?: React.ReactNode
}

export function TreeItem(props: TreeItemProps) {
  const {title, content} = props
  return (
    <AriaTreeItem
      {...props}
      textValue={title}
      className={clsx('alinea-rac-TreeItem', props.className)}
    >
      <TreeItemContent>{content ?? title}</TreeItemContent>
      {props.children}
    </AriaTreeItem>
  )
}
