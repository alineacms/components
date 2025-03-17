import clsx from 'clsx'
import {
  Cell as CellPrimitive,
  type CellProps,
  Collection,
  Column as ColumnPrimitive,
  type ColumnProps,
  Row as RowPrimitive,
  type RowProps,
  TableBody as TableBodyPrimitive,
  type TableBodyProps,
  TableHeader as TableHeaderPrimitive,
  type TableHeaderProps,
  Table as TablePrimitive,
  type TableProps,
  useTableOptions
} from 'react-aria-components'
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowUp} from '../icons/IcRoundKeyboardArrowUp.tsx'
import {Checkbox} from './Checkbox.tsx'
import './Table.css'
import type {PropsWithChildren} from 'react'

export type {
  TableProps,
  ColumnProps,
  RowProps,
  CellProps,
  TableBodyProps
} from 'react-aria-components'

export function TableOverflow(props: PropsWithChildren<{className?: string}>) {
  return (
    <div
      {...props}
      className={clsx('alinea-rac-TableOverflow', props.className)}
    />
  )
}

export function Table(
  props: TableProps & {
    striped?: boolean
    overflow?: boolean
  }
) {
  return (
    <div
      className={clsx('alinea-rac-Table-container', {
        'alinea-rac-TableOverflow': props.overflow
      })}
    >
      <TablePrimitive
        data-striped={props.striped}
        data-overflow={props.overflow}
        {...props}
        className={clsx('alinea-rac-Table', props.className)}
      />
    </div>
  )
}

export function Column(props: PropsWithChildren<ColumnProps>) {
  return (
    <ColumnPrimitive
      {...props}
      className={clsx('alinea-rac-Table-column', props.className)}
    >
      {({allowsSorting, sortDirection}) => (
        <div className="alinea-rac-Table-content">
          {props.children}
          {allowsSorting && (
            <span className="alinea-rac-Table-sortIndicator">
              {sortDirection === 'ascending' ? (
                <IcRoundKeyboardArrowUp />
              ) : (
                <IcRoundKeyboardArrowDown />
              )}
            </span>
          )}
        </div>
      )}
    </ColumnPrimitive>
  )
}

export function TableHeader<T extends object>({
  columns,
  children,
  ...props
}: TableHeaderProps<T>) {
  const {selectionMode} = useTableOptions()

  return (
    <TableHeaderPrimitive className="alinea-rac-Table-header">
      {selectionMode === 'multiple' && (
        <ColumnPrimitive className="alinea-rac-Table-column">
          <Checkbox slot="selection" />
        </ColumnPrimitive>
      )}
      <Collection items={columns}>{children}</Collection>
    </TableHeaderPrimitive>
  )
}

export function Row<T extends object>({
  id,
  columns,
  children,
  ...props
}: RowProps<T>) {
  const {selectionMode} = useTableOptions()

  return (
    <RowPrimitive
      id={id}
      {...props}
      className={clsx('alinea-rac-Table-row', props.className)}
    >
      {selectionMode === 'multiple' && (
        <Cell className="alinea-rac-Table-cell">
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </RowPrimitive>
  )
}

export function Cell(props: CellProps) {
  return (
    <CellPrimitive
      {...props}
      className={clsx('alinea-rac-Table-cell', props.className)}
    />
  )
}

export function TableBody<T extends object>(props: TableBodyProps<T>) {
  return <TableBodyPrimitive<T> {...props} className="alinea-rac-Table-body" />
}
