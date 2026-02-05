import clsx from 'clsx'
import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  type GridListProps,
  type GridListItemProps as RACGridListItemProps
} from 'react-aria-components'
import './GridList.css'
import {type ReactNode, useEffect, useRef} from 'react'
import {Button} from '../components/Button.tsx'

/**
 * Prevents React Aria's keyboard navigation and drag operations from
 * interfering with interactive elements inside the inner content area.
 * - Blocks drag events that start from the inner content area
 * - Stops keyboard event propagation when focus is inside the inner content area
 */
function useAllowInteractiveContent(ref: React.RefObject<HTMLElement | null>) {
  const mouseDownTargetRef = useRef<Element | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    function handleMouseDown(e: MouseEvent) {
      mouseDownTargetRef.current = e.target as Element
    }

    function handleDragStart(e: DragEvent) {
      const mouseDownTarget = mouseDownTargetRef.current
      if (mouseDownTarget?.closest('.alinea-rac-ListItem-inner')) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    function handleMouseUp() {
      mouseDownTargetRef.current = null
    }

    function handleKeyDown(e: KeyboardEvent) {
      // Allow keyboard events to work normally inside the inner content area
      // instead of being captured by React Aria's list navigation
      const target = e.target as Element
      if (
        element?.contains(target) &&
        target.closest('.alinea-rac-ListItem-inner')
      ) {
        e.stopPropagation()
      }
    }

    element.addEventListener('mousedown', handleMouseDown, true)
    element.addEventListener('dragstart', handleDragStart, true)
    element.addEventListener('mouseup', handleMouseUp, true)
    // Use window to ensure we capture before React Aria's handlers
    window.addEventListener('keydown', handleKeyDown, true)
    return () => {
      element.removeEventListener('mousedown', handleMouseDown, true)
      element.removeEventListener('dragstart', handleDragStart, true)
      element.removeEventListener('mouseup', handleMouseUp, true)
      window.removeEventListener('keydown', handleKeyDown, true)
    }
  }, [ref])
}

export function GridList<T extends object>({
  children,
  className,
  ...props
}: GridListProps<T>) {
  const ref = useRef<HTMLDivElement>(null)
  useAllowInteractiveContent(ref)

  return (
    <div ref={ref}>
      <AriaGridList {...props} className={clsx('alinea-rac-List', className)}>
        {children}
      </AriaGridList>
    </div>
  )
}

export interface GridListItemProps
  extends Omit<RACGridListItemProps, 'children'> {
  header?: ReactNode
  children?: ReactNode
}

export function GridListItem({children, header, ...props}: GridListItemProps) {
  const textValue = typeof children === 'string' ? children : undefined
  const {className, ...rest} = props
  return (
    <AriaGridListItem
      textValue={textValue}
      {...rest}
      className={clsx('alinea-rac-ListItem', className)}
    >
      {({allowsDragging}) => (
        <>
          <header>
            {allowsDragging && (
              <Button slot="drag" size="icon" appearance="plain">
                ≡
              </Button>
            )}
            {header}
          </header>
          <div className="alinea-rac-ListItem-inner">{children}</div>
        </>
      )}
    </AriaGridListItem>
  )
}
