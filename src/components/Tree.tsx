import clsx from 'clsx'
import {type ReactNode, memo} from 'react'
import {
  Tree as AriaTree,
  TreeItem as AriaTreeItem,
  TreeItemContent as AriaTreeItemContent,
  type TreeItemContentProps as AriaTreeItemContentProps,
  type TreeItemProps as AriaTreeItemProps,
  Button,
  type TreeItemContentRenderProps,
  type TreeProps
} from 'react-aria-components'
import {IcRoundKeyboardArrowRight} from '../stories/icons/IcRoundKeyboardArrowRight.tsx'
import {Checkbox} from './Checkbox.tsx'
import {Icon, type IconProps} from './Icon.tsx'
import './Tree.css'

export function Tree<T extends object>(props: TreeProps<T>) {
  const {className, ...rest} = props
  return (
    <AriaTree
      {...rest}
      className={renderProps =>
        clsx(
          'alinea-rac-Tree',
          typeof className === 'function' ? className(renderProps) : className
        )
      }
    />
  )
}

export interface TreeItemContentProps
  extends Omit<AriaTreeItemContentProps, 'children'> {
  children?: ReactNode
  icon?: IconProps['icon']
  suffix?: ReactNode
}

export const TreeItemContent = memo(function TreeItemContent({
  icon,
  suffix,
  children
}: TreeItemContentProps) {
  return (
    <AriaTreeItemContent>
      {({
        selectionBehavior,
        selectionMode,
        allowsDragging,
        isDragging
      }: TreeItemContentRenderProps) => (
        <>
          {selectionBehavior === 'toggle' && selectionMode !== 'none' && (
            <Checkbox slot="selection" />
          )}
          <div className="alinea-rac-TreeItem-controls">
            <Button
              slot="drag"
              data-invisible={!isDragging}
              className="alinea-rac-TreeItem-dragHandle"
            >
              ≡
            </Button>
            <Button slot="chevron" data-invisible={isDragging}>
              <IcRoundKeyboardArrowRight />
            </Button>
          </div>
          {icon && (
            <span data-slot="icon">
              <Icon icon={icon} />
            </span>
          )}
          <span data-slot="label">{children}</span>
          {suffix && <span data-slot="suffix">{suffix}</span>}
        </>
      )}
    </AriaTreeItemContent>
  )
})

export interface TreeItemProps extends Partial<AriaTreeItemProps> {
  title: string
  icon?: IconProps['icon']
  suffix?: ReactNode
}

export function TreeItem({
  title,
  icon,
  suffix,
  children,
  className,
  hasChildItems,
  ...rest
}: TreeItemProps) {
  return (
    <AriaTreeItem
      textValue={title}
      {...rest}
      hasChildItems={hasChildItems}
      className={renderProps =>
        clsx(
          'alinea-rac-TreeItem',
          typeof className === 'function' ? className(renderProps) : className
        )
      }
    >
      <TreeItemContent icon={icon} suffix={suffix}>
        {title}
      </TreeItemContent>
      {children}
    </AriaTreeItem>
  )
}
