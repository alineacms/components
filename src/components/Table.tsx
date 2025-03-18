import clsx from 'clsx'
import {
  Cell as CellPrimitive,
  Collection,
  Column as ColumnPrimitive,
  Row as RowPrimitive,
  TableBody as TableBodyPrimitive,
  TableHeader as TableHeaderPrimitive,
  Table as TablePrimitive,
  useTableOptions
} from 'react-aria-components'
import type {
  CellProps,
  ColumnProps,
  RowProps,
  TableBodyProps,
  TableHeaderProps,
  TableProps as TablePrimitiveProps
} from 'react-aria-components'
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowUp} from '../icons/IcRoundKeyboardArrowUp.tsx'
import {Checkbox} from './Checkbox.tsx'
import './Table.css'
import type {PropsWithChildren} from 'react'

export type {
  ColumnProps,
  RowProps,
  CellProps,
  TableBodyProps
} from 'react-aria-components'

export interface TableProps extends TablePrimitiveProps {
  striped?: boolean
  overflow?: boolean
}

export function Table(props: TableProps) {
  return (
    <div
      className={clsx('alinea-rac-Table', props.className)}
      data-overflow={props.overflow}
      data-striped={props.striped}
    >
      <TablePrimitive {...props} className="alinea-rac-Table-table" />
    </div>
  )
}

export function Column(props: PropsWithChildren<ColumnProps>) {
  return (
    <ColumnPrimitive
      {...props}
      className={clsx('alinea-rac-Column', props.className)}
    >
      {({allowsSorting, sortDirection}) => {
        if (!allowsSorting) return props.children
        return (
          <div
            className="alinea-rac-Column-label"
            data-sortable={allowsSorting}
          >
            {props.children}
            {allowsSorting && (
              <span className="alinea-rac-Column-sortIndicator">
                {sortDirection === 'ascending' ? (
                  <IcRoundKeyboardArrowUp />
                ) : (
                  <IcRoundKeyboardArrowDown />
                )}
              </span>
            )}
          </div>
        )
      }}
    </ColumnPrimitive>
  )
}

export function TableHeader<T extends object>({
  columns,
  children
}: TableHeaderProps<T>) {
  const {selectionMode} = useTableOptions()

  return (
    <TableHeaderPrimitive className="alinea-rac-TableHeader">
      {selectionMode === 'multiple' && (
        <Column>
          <Checkbox slot="selection" />
        </Column>
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
      className={clsx('alinea-rac-Row', props.className)}
    >
      {selectionMode === 'multiple' && (
        <Cell>
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
  return <TableBodyPrimitive<T> {...props} className="alinea-rac-TableBody" />
}
