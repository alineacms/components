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

function isInteractiveElement(element: Element | null): boolean {
  if (!element) return false
  const tagName = element.tagName.toLowerCase()
  if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
    return true
  }
  if (element.hasAttribute('contenteditable')) {
    return true
  }
  return false
}

function isInsideInteractiveElement(
  element: Element | null,
  boundary: Element | null
): boolean {
  let current = element
  while (current && current !== boundary) {
    if (isInteractiveElement(current)) {
      return true
    }
    current = current.parentElement
  }
  return false
}

export function GridList<T extends object>({
  children,
  ...props
}: GridListProps<T>) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseDownTargetRef = useRef<Element | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    function handleMouseDown(e: MouseEvent) {
      // Track where the mousedown occurred so we can check it in dragstart
      mouseDownTargetRef.current = e.target as Element
    }

    function handleDragStart(e: DragEvent) {
      // Check if the original mousedown was inside an interactive element
      const mouseDownTarget = mouseDownTargetRef.current
      if (!mouseDownTarget) return

      // Find the list item that contains this drag
      const listItem = (e.target as Element).closest?.('.alinea-rac-ListItem')
      if (listItem) {
        const innerContainer = listItem.querySelector('.alinea-rac-ListItem-inner')
        if (
          innerContainer &&
          innerContainer.contains(mouseDownTarget) &&
          isInsideInteractiveElement(mouseDownTarget, innerContainer)
        ) {
          e.preventDefault()
          e.stopPropagation()
        }
      }
    }

    function handleMouseUp() {
      // Clear the mousedown target
      mouseDownTargetRef.current = null
    }

    element.addEventListener('mousedown', handleMouseDown, true)
    element.addEventListener('dragstart', handleDragStart, true)
    element.addEventListener('mouseup', handleMouseUp, true)
    return () => {
      element.removeEventListener('mousedown', handleMouseDown, true)
      element.removeEventListener('dragstart', handleDragStart, true)
      element.removeEventListener('mouseup', handleMouseUp, true)
    }
  }, [])

  return (
    <div ref={ref}>
      <AriaGridList
        {...props}
        className={clsx('alinea-rac-List', props.className)}
      >
        {children}
      </AriaGridList>
    </div>
  )
}

export interface GridListItemProps extends Omit<RACGridListItemProps, 'children'> {
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
      {({selectionMode, selectionBehavior, allowsDragging}) => (
        <>
          {/* Add elements for drag and drop and selection. */}
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
