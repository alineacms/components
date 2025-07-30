import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  Button,
  type GridListItemProps,
  type GridListProps
} from 'react-aria-components'
import {Checkbox} from '../components/Checkbox.tsx'
import './GridList.css'

export function GridList<T extends object>({
  children,
  ...props
}: GridListProps<T>) {
  return <AriaGridList {...props}>{children}</AriaGridList>
}

export function GridListItem({
  children,
  ...props
}: Omit<GridListItemProps, 'children'> & {
  children?: React.ReactNode
}) {
  const textValue = typeof children === 'string' ? children : undefined
  return (
    <AriaGridListItem textValue={textValue} {...props}>
      {({selectionMode, selectionBehavior, allowsDragging}) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && <Button slot="drag">drag</Button>}
          {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
            <Checkbox slot="selection" />
          )}
          {children}
        </>
      )}
    </AriaGridListItem>
  )
}
