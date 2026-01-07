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

export interface ListItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  leading?: ReactNode
  trailing?: ReactNode
  inner?: ReactNode
}

export function ListItem({
  leading,
  trailing,
  inner,
  children,
  ...props
}: ListItemProps) {
  return (
    <div {...props} className={clsx('alinea-rac-ListItem', props.className)}>
      <header className="alinea-rac-ListItem-header">
        {leading && (
          <div className="alinea-rac-ListItem-leading">{leading}</div>
        )}
        {children && (
          <div className="alinea-rac-ListItem-content">{children}</div>
        )}
        {trailing && (
          <div className="alinea-rac-ListItem-trailing">{trailing}</div>
        )}
      </header>
      {inner && <div className="alinea-rac-ListItem-inner">{inner}</div>}
    </div>
  )
}
