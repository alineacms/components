import clsx from 'clsx'
import type {HTMLAttributes, ReactNode} from 'react'
import './List.css'

export interface ListProps extends HTMLAttributes<HTMLDivElement> {}

export function List(props: ListProps) {
  return (
    <div
      role="list"
      {...props}
      className={clsx('alinea-rac-List', props.className)}
    />
  )
}

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  title?: ReactNode
  options?: ReactNode
}

export function ListItem({title, options, children, ...props}: ListItemProps) {
  const hasHeader = Boolean(title || options)
  const hasContent = children !== undefined && children !== null

  return (
    <div
      role="listitem"
      {...props}
      className={clsx('alinea-rac-ListItem', props.className)}
    >
      {hasHeader && (
        <header className="alinea-rac-ListItem-header">
          {title && <div className="alinea-rac-ListItem-title">{title}</div>}
          {options && (
            <div className="alinea-rac-ListItem-options">{options}</div>
          )}
        </header>
      )}
      {hasContent && (
        <div className="alinea-rac-ListItem-content">{children}</div>
      )}
    </div>
  )
}
