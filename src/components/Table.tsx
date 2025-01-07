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
import {Checkbox} from './Checkbox.tsx'
import './Table.css'
import type {PropsWithChildren} from 'react'
import {Button} from './Button.tsx'

export type {
  TableProps,
  ColumnProps,
  RowProps,
  CellProps,
  TableBodyProps
} from 'react-aria-components'

export function Table(
  props: TableProps & {
    striped?: boolean
  }
) {
  return (
    <TablePrimitive
      data-striped={props.striped}
      {...props}
      className={clsx('alinea-rac-Table', props.className)}
    />
  )
}

export function Column(props: PropsWithChildren<ColumnProps>) {
  return (
    <ColumnPrimitive
      {...props}
      className={clsx('alinea-rac-Column', props.className)}
    >
      {({allowsSorting, sortDirection}) => (
        <div className={clsx('alinea-rac-Column-flex')}>
          {props.children}
          {allowsSorting && (
            <span
              aria-hidden="true"
              className="alinea-rac-Column-sortIndicator"
            >
              {sortDirection === 'ascending' ? '▲' : '▼'}
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
  const {selectionBehavior, selectionMode, allowsDragging} = useTableOptions()

  return (
    <TableHeaderPrimitive
      className={clsx('alinea-rac-TableHeader', props.className)}
    >
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <ColumnPrimitive className="alinea-rac-Column" />}
      {selectionBehavior === 'toggle' && (
        <ColumnPrimitive className="alinea-rac-Column">
          {selectionMode === 'multiple' && <Checkbox slot="selection" />}
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
  const {selectionBehavior, allowsDragging} = useTableOptions()

  return (
    <RowPrimitive
      id={id}
      {...props}
      className={clsx('alinea-rac-Row', props.className)}
    >
      {allowsDragging && (
        <Cell className="alinea-rac-Cell">
          <Button slot="drag">≡</Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell className="alinea-rac-Cell">
          <span aria-hidden className={clsx('alinea-rac-Row-Indicator')} />
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
      className={clsx('alinea-rac-Cell', props.className)}
    />
  )
}

export function TableBody<T extends object>(props: TableBodyProps<T>) {
  return (
    <TableBodyPrimitive<T>
      {...props}
      className={clsx('alinea-rac-TableBody', props.className)}
    />
  )
}
