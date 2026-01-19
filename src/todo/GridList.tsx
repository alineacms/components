import clsx from 'clsx'
import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  type GridListItemProps,
  type GridListProps
} from 'react-aria-components'
import './GridList.css'
import {Button} from '../components/Button.tsx'

export function GridList<T extends object>({
  children,
  ...props
}: GridListProps<T>) {
  return (
    <AriaGridList
      {...props}
      className={clsx('alinea-rac-List', props.className)}
    >
      {children}
    </AriaGridList>
  )
}

export function GridListItem({children, ...props}: GridListItemProps) {
  const textValue = typeof children === 'string' ? children : undefined
  const {className, ...rest} = props
  return (
    <AriaGridListItem
      textValue={textValue}
      {...rest}
      className={clsx('alinea-rac-ListItem', className)}
    >
      {({selectionMode, selectionBehavior, allowsDragging}) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          <header>
            {allowsDragging && (
              <Button slot="drag" size="icon" appearance="plain">
                ≡
              </Button>
            )}
            {children}
          </header>
        </>
      )}
    </AriaGridListItem>
  )
}
