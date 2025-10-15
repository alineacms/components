import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  type GridListItemProps,
  type GridListProps
} from 'react-aria-components'
import {Checkbox} from './Checkbox.tsx'
import './GridList.css'
import type {PropsWithChildren} from 'react'
import {Button} from './Button.tsx'

// Todo: consider exposing this as a separate component
interface CardProps extends PropsWithChildren {
  elevated?: boolean
}

function Card({elevated, children}: CardProps) {
  return (
    <div
      className="alinea-rac-Card"
      data-elevated={elevated ? 'true' : undefined}
    >
      {children}
    </div>
  )
}

export function GridList<T extends object>({
  children,
  ...props
}: GridListProps<T>) {
  return (
    <Card>
      <AriaGridList {...props}>{children}</AriaGridList>
    </Card>
  )
}

export function GridListItem({children, ...props}: GridListItemProps) {
  const textValue = typeof children === 'string' ? children : undefined
  return (
    <AriaGridListItem
      textValue={textValue}
      {...props}
      className="alinea-rac-Card"
      data-elevated="true"
    >
      {({selectionMode, selectionBehavior, allowsDragging}) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && <Button slot="drag">≡</Button>}
          {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
            <Checkbox slot="selection" />
          )}
          {children}
        </>
      )}
    </AriaGridListItem>
  )
}
