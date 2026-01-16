import {
  useGrid,
  useGridCell,
  useGridRow,
  useGridRowGroup
} from '@react-aria/grid'
import {GridCollection, useGridState} from '@react-stately/grid'
import type {GridState} from '@react-stately/grid'
import type {GridNode, GridRow} from '@react-types/grid'
import type {Key} from '@react-types/shared'
import clsx from 'clsx'
import {
  memo,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from 'react'
import type {CSSProperties, KeyboardEvent, MutableRefObject} from 'react'
import {IcRoundAddCircle} from '../stories/icons/IcRoundAddCircle.tsx'
import {IcRoundDelete} from '../stories/icons/IcRoundDelete.tsx'
import {Button} from './Button.tsx'
import {Icon} from './Icon.tsx'
import './EditableTable.css'

export type EditableTableColumn = {
  id: string
  label: string
}

export type EditableTableRow = {
  id: string
  cells: string[]
}

export type EditableTableValue = {
  columns: EditableTableColumn[]
  rows: EditableTableRow[]
}

export interface EditableTableProps {
  value?: EditableTableValue
  defaultValue?: EditableTableValue
  onChange?: (value: EditableTableValue) => void
  striped?: boolean
  minRows?: number
  minColumns?: number
  caption?: string
  label?: string
  className?: string
  style?: CSSProperties
  'aria-label'?: string
  'aria-labelledby'?: string
}

const DEFAULT_COLUMNS = 3
const DEFAULT_ROWS = 3
const ROW_HEADER_COLUMN_ID = '__row__'

const createId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `editable-table-${Math.random().toString(36).slice(2, 10)}`
}

const createColumns = (count: number, startIndex = 0) =>
  Array.from({length: count}, (_, index) => ({
    id: createId(),
    label: `Column ${startIndex + index + 1}`
  }))

const createFallbackColumns = (count: number) =>
  Array.from({length: count}, (_, index) => ({
    id: `fallback-${index + 1}`,
    label: `Column ${index + 1}`
  }))

const createRows = (count: number, columnCount: number) =>
  Array.from({length: count}, () => ({
    id: createId(),
    cells: Array.from({length: columnCount}, () => '')
  }))

const createDefaultValue = (minRows: number, minColumns: number) => {
  const columnCount = Math.max(DEFAULT_COLUMNS, minColumns)
  const rowCount = Math.max(DEFAULT_ROWS, minRows)
  const columns = createColumns(columnCount)
  return {
    columns,
    rows: createRows(rowCount, columns.length)
  }
}

type GridColumnMeta = EditableTableColumn & {
  isRowHeader?: boolean
}

type CellMeta = {
  key: Key
  rowId: string
  columnId: string
  rowIndex: number
  columnIndex: number
  isRowHeader: boolean
}

type EditableTableRowItemProps = {
  rowNode: GridNode<EditableTableRow>
  row: EditableTableRow
  rowIndex: number
  cellMetaMap: Map<Key, CellMeta>
  cellIndexMap: Map<string, Key>
  gridState: GridState<EditableTableRow, GridCollection<EditableTableRow>>
  cellRefs: MutableRefObject<Map<Key, HTMLTableCellElement>>
  focusedKey: Key | null
  activeCellKey: Key | null
  isEditing: boolean
  canRemoveRow: boolean
  moveFocusToKey: (key: Key) => void
  startEditing: () => void
  onGridCellKeyDown: (event: KeyboardEvent<HTMLElement>, meta: CellMeta) => void
  setActiveCellKey: (key: Key) => void
  removeRow: (rowId: string) => void
}

type EditableTableCellItemProps = {
  cellNode: GridNode<EditableTableRow>
  meta: CellMeta
  rowIndex: number
  rowId: string
  cellValue: string
  cellIndexMap: Map<string, Key>
  gridState: GridState<EditableTableRow, GridCollection<EditableTableRow>>
  cellRefs: MutableRefObject<Map<Key, HTMLTableCellElement>>
  isFocused: boolean
  isEditing: boolean
  canRemoveRow: boolean
  moveFocusToKey: (key: Key) => void
  startEditing: () => void
  onGridCellKeyDown: (event: KeyboardEvent<HTMLElement>, meta: CellMeta) => void
  setActiveCellKey: (key: Key) => void
  removeRow: (rowId: string) => void
}

const EditableTableCellItem = memo(function EditableTableCellItem({
  cellNode,
  meta,
  rowIndex,
  rowId,
  cellValue,
  cellIndexMap,
  gridState,
  cellRefs,
  isFocused,
  isEditing,
  canRemoveRow,
  moveFocusToKey,
  startEditing,
  onGridCellKeyDown,
  setActiveCellKey,
  removeRow
}: EditableTableCellItemProps) {
  const cellRef = useRef<HTMLTableCellElement>(null)
  useEffect(() => {
    if (cellRef.current) {
      cellRefs.current.set(cellNode.key, cellRef.current)
    }
    return () => {
      cellRefs.current.delete(cellNode.key)
    }
  }, [cellRefs, cellNode.key])
  const {gridCellProps} = useGridCell(
    {
      node: cellNode as GridNode<unknown>,
      focusMode: 'cell'
    },
    gridState,
    cellRef
  )
  const CellTag = meta.isRowHeader ? 'th' : 'td'
  const handleKeyDownCapture = (event: KeyboardEvent<HTMLElement>) => {
    if (!meta.isRowHeader && (event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
      event.preventDefault()
      event.stopPropagation()
      const nextRowIndex =
        meta.rowIndex + (event.key === 'ArrowDown' ? 1 : -1)
      const nextKey = cellIndexMap.get(
        `${nextRowIndex}-${meta.columnIndex}`
      )
      if (nextKey) {
        moveFocusToKey(nextKey)
      }
      return
    }
    gridCellProps.onKeyDownCapture?.(event)
  }
  return (
    <CellTag
      ref={cellRef}
      {...gridCellProps}
      onKeyDownCapture={handleKeyDownCapture}
      role={meta.isRowHeader ? 'rowheader' : 'gridcell'}
      className={clsx(
        meta.isRowHeader
          ? 'alinea-rac-EditableTable-rowHeader'
          : 'alinea-rac-EditableTable-cell'
      )}
      data-focused={isFocused}
      data-editing={isEditing}
      onDoubleClick={() => startEditing()}
      onKeyDown={event => onGridCellKeyDown(event, meta)}
      onFocus={event => {
        gridCellProps.onFocus?.(event)
        setActiveCellKey(cellNode.key)
      }}
    >
      {meta.isRowHeader ? (
        <div className="alinea-rac-EditableTable-rowHeaderInner">
          <span className="alinea-rac-EditableTable-rowLabel">{cellValue}</span>
          <button
            type="button"
            className="alinea-rac-EditableTable-iconButton"
            data-intent="danger"
            onClick={() => removeRow(rowId)}
            disabled={!canRemoveRow}
            aria-label={`Remove row ${rowIndex + 1}`}
          >
            <Icon icon={IcRoundDelete} />
          </button>
        </div>
      ) : (
        <div className="alinea-rac-EditableTable-cellContent">{cellValue}</div>
      )}
    </CellTag>
  )
}, (prev, next) => {
  return (
    prev.cellNode.key === next.cellNode.key &&
    prev.cellValue === next.cellValue &&
    prev.isFocused === next.isFocused &&
    prev.isEditing === next.isEditing &&
    prev.canRemoveRow === next.canRemoveRow &&
    prev.rowIndex === next.rowIndex &&
    prev.meta === next.meta
  )
})

const EditableTableRowItem = memo(function EditableTableRowItem({
  rowNode,
  row,
  rowIndex,
  cellMetaMap,
  cellIndexMap,
  gridState,
  cellRefs,
  focusedKey,
  activeCellKey,
  isEditing,
  canRemoveRow,
  moveFocusToKey,
  startEditing,
  onGridCellKeyDown,
  setActiveCellKey,
  removeRow
}: EditableTableRowItemProps) {
  const rowRef = useRef<HTMLTableRowElement>(null)
  const {rowProps} = useGridRow({node: rowNode}, gridState, rowRef)

  return (
    <tr {...rowProps} ref={rowRef}>
      {[...rowNode.childNodes].map(cellNode => {
        const meta = cellMetaMap.get(cellNode.key)
        if (!meta) return null
        const isFocused = focusedKey === cellNode.key
        const isEditingCell = isEditing && activeCellKey === cellNode.key
        const cellValue = meta.isRowHeader
          ? `${rowIndex + 1}`
          : (row.cells[meta.columnIndex - 1] ?? '')
        return (
          <EditableTableCellItem
            key={String(cellNode.key)}
            cellNode={cellNode as GridNode<EditableTableRow>}
            meta={meta}
            rowIndex={rowIndex}
            rowId={row.id}
            cellValue={cellValue}
            cellIndexMap={cellIndexMap}
            gridState={gridState}
            cellRefs={cellRefs}
            isFocused={isFocused}
            isEditing={isEditingCell}
            canRemoveRow={canRemoveRow}
            moveFocusToKey={moveFocusToKey}
            startEditing={startEditing}
            onGridCellKeyDown={onGridCellKeyDown}
            setActiveCellKey={setActiveCellKey}
            removeRow={removeRow}
          />
        )
      })}
    </tr>
  )
}, (prev, next) => {
  if (prev.row !== next.row) return false
  if (prev.rowIndex !== next.rowIndex) return false
  if (prev.canRemoveRow !== next.canRemoveRow) return false
  const prefix = `${prev.row.id}-`
  const prevFocused = prev.focusedKey
    ? String(prev.focusedKey).startsWith(prefix)
    : false
  const nextFocused = next.focusedKey
    ? String(next.focusedKey).startsWith(prefix)
    : false
  if (prevFocused !== nextFocused) return false
  const prevEditing = prev.activeCellKey
    ? String(prev.activeCellKey).startsWith(prefix) && prev.isEditing
    : false
  const nextEditing = next.activeCellKey
    ? String(next.activeCellKey).startsWith(prefix) && next.isEditing
    : false
  if (prevEditing !== nextEditing) return false
  return true
})

export function EditableTable({
  value,
  defaultValue,
  onChange,
  striped,
  minRows = 1,
  minColumns = 1,
  caption,
  label,
  className,
  style,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby
}: EditableTableProps) {
  const tableId = useId()
  const gridRef = useRef<HTMLTableElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<HTMLInputElement>(null)
  const cellRefs = useRef(new Map<Key, HTMLTableCellElement>())
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState<EditableTableValue>(
    () => value ?? defaultValue ?? createDefaultValue(minRows, minColumns)
  )
  const [activeCellKey, setActiveCellKey] = useState<Key | null>(null)
  const [editorValue, setEditorValue] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const currentValue =
    value ?? internalValue ?? createDefaultValue(minRows, minColumns)
  const fallbackColumns = createFallbackColumns(Math.max(minColumns, 1))
  const safeValue =
    currentValue.columns.length > 0
      ? currentValue
      : {
          ...currentValue,
          columns: fallbackColumns,
          rows: currentValue.rows.map(row => ({
            ...row,
            cells: Array.from(
              {length: fallbackColumns.length},
              (_, index) => row.cells[index] ?? ''
            )
          }))
        }
  const columns = safeValue.columns
  const rows = safeValue.rows
  const gridColumns = useMemo<GridColumnMeta[]>(
    () => [
      {id: ROW_HEADER_COLUMN_ID, label: 'Row', isRowHeader: true},
      ...columns
    ],
    [columns]
  )
  const canRemoveColumn = columns.length > minColumns
  const canRemoveRow = rows.length > minRows

  const {collection, cellMetaMap, cellIndexMap, rowMap} = useMemo(() => {
    const rowLookup = new Map<string, EditableTableRow>()
    rows.forEach(row => rowLookup.set(row.id, row))
    const cellLookup = new Map<Key, CellMeta>()
    const cellIndexLookup = new Map<string, Key>()
    const items: GridRow<EditableTableRow>[] = rows.map((row, rowIndex) => ({
      key: row.id,
      type: 'row',
      value: row,
      textValue: `${rowIndex + 1}`,
      childNodes: gridColumns.map((column, columnIndex) => {
        const cellKey: Key =
          column.id === ROW_HEADER_COLUMN_ID
            ? `${row.id}-${ROW_HEADER_COLUMN_ID}`
            : `${row.id}-${column.id}`
        const isRowHeader = column.id === ROW_HEADER_COLUMN_ID
        const cellText = isRowHeader
          ? `${rowIndex + 1}`
          : (row.cells[columnIndex - 1] ?? '')
        cellLookup.set(cellKey, {
          key: cellKey,
          rowId: row.id,
          columnId: column.id,
          rowIndex,
          columnIndex,
          isRowHeader
        })
        cellIndexLookup.set(`${rowIndex}-${columnIndex}`, cellKey)
        return {
          key: cellKey,
          type: 'cell',
          index: columnIndex,
          parentKey: row.id,
          value: row,
          rendered: cellText,
          textValue: cellText,
          hasChildNodes: false,
          childNodes: []
        }
      })
    }))
    return {
      collection: new GridCollection({
        columnCount: gridColumns.length,
        items
      }),
      cellMetaMap: cellLookup,
      cellIndexMap: cellIndexLookup,
      rowMap: rowLookup
    }
  }, [rows, gridColumns])

  const gridState = useGridState({
    collection,
    selectionMode: 'single',
    selectionBehavior: 'replace',
    focusMode: 'cell'
  })
  const {gridProps} = useGrid(
    {
      'aria-label': ariaLabel ?? label,
      'aria-labelledby': ariaLabelledby,
      scrollRef
    },
    gridState,
    gridRef
  )
  const {rowGroupProps: headerRowGroupProps} = useGridRowGroup()
  const {rowGroupProps: bodyRowGroupProps} = useGridRowGroup()
  const focusedKey = gridState.selectionManager.focusedKey
  const activeCell = activeCellKey ? cellMetaMap.get(activeCellKey) : null
  const moveFocusToKey = useCallback(
    (key: Key) => {
      gridState.selectionManager.setFocusedKey(key)
      requestAnimationFrame(() => {
        cellRefs.current.get(key)?.focus()
      })
    },
    [gridState.selectionManager]
  )

  useEffect(() => {
    if (focusedKey !== activeCellKey) {
      setActiveCellKey(focusedKey ?? null)
    }
  }, [focusedKey, activeCellKey])

  useEffect(() => {
    if (!activeCell || activeCell.isRowHeader) return
    const row = rowMap.get(activeCell.rowId)
    const nextValue = row?.cells[activeCell.columnIndex - 1] ?? ''
    setEditorValue(nextValue)
  }, [activeCell, rowMap])

  useEffect(() => {
    if (activeCellKey && focusedKey && activeCellKey !== focusedKey) {
      setIsEditing(false)
    }
  }, [activeCellKey, focusedKey])

  useEffect(() => {
    if (!focusedKey && rows.length > 0 && columns.length > 0) {
      const firstRow = rows[0]
      const firstColumn = columns[0]
      gridState.selectionManager.setFocusedKey(
        `${firstRow.id}-${firstColumn.id}`
      )
    }
  }, [rows, columns, focusedKey, gridState.selectionManager])

  const updateValue = (
    updater: (current: EditableTableValue) => EditableTableValue
  ) => {
    const nextValue = updater(safeValue)
    if (!isControlled) {
      setInternalValue(nextValue)
    }
    onChange?.(nextValue)
  }

  const addRow = () => {
    updateValue(current => ({
      ...current,
      rows: [
        ...current.rows,
        {id: createId(), cells: Array.from({length: columns.length}, () => '')}
      ]
    }))
  }

  const addColumn = () => {
    updateValue(current => ({
      ...current,
      columns: [
        ...current.columns,
        {id: createId(), label: `Column ${current.columns.length + 1}`}
      ],
      rows: current.rows.map(row => ({...row, cells: [...row.cells, '']}))
    }))
  }

  const removeRow = (rowId: string) => {
    if (!canRemoveRow) return
    updateValue(current => ({
      ...current,
      rows: current.rows.filter(row => row.id !== rowId)
    }))
  }

  const removeColumn = (columnId: string) => {
    if (!canRemoveColumn) return
    updateValue(current => {
      const columnIndex = current.columns.findIndex(
        column => column.id === columnId
      )
      if (columnIndex === -1) return current
      return {
        ...current,
        columns: current.columns.filter(column => column.id !== columnId),
        rows: current.rows.map(row => ({
          ...row,
          cells: row.cells.filter((_, index) => index !== columnIndex)
        }))
      }
    })
  }

  const updateCell = (rowId: string, columnIndex: number, next: string) => {
    updateValue(current => ({
      ...current,
      rows: current.rows.map(row => {
        if (row.id !== rowId) return row
        const cells = [...row.cells]
        while (cells.length < current.columns.length) {
          cells.push('')
        }
        cells[columnIndex] = next
        return {...row, cells}
      })
    }))
  }

  const startEditing = (nextValue?: string) => {
    if (!activeCell || activeCell.isRowHeader) return
    if (nextValue !== undefined) {
      setEditorValue(nextValue)
      updateCell(activeCell.rowId, activeCell.columnIndex - 1, nextValue)
    }
    setIsEditing(true)
    requestAnimationFrame(() => {
      editorRef.current?.focus()
      editorRef.current?.select()
    })
  }

  const exitEditing = () => {
    setIsEditing(false)
    if (activeCellKey) {
      cellRefs.current.get(activeCellKey)?.focus()
    }
  }

  const onEditorChange = (nextValue: string) => {
    setEditorValue(nextValue)
    if (activeCell && !activeCell.isRowHeader) {
      updateCell(activeCell.rowId, activeCell.columnIndex - 1, nextValue)
    }
  }

  const onEditorKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      exitEditing()
    }
    if (event.key === 'Escape') {
      event.preventDefault()
      exitEditing()
    }
  }

  const onGridCellKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    meta: CellMeta
  ) => {
    if (meta.isRowHeader) return
    if (event.key === 'Enter' || event.key === 'F2') {
      event.preventDefault()
      startEditing()
      return
    }
    if (event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault()
      startEditing('')
      return
    }
    if (
      event.key.length === 1 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.altKey
    ) {
      event.preventDefault()
      startEditing(event.key)
    }
  }

  return (
    <div
      className={clsx('alinea-rac-EditableTable', className)}
      data-striped={striped}
      data-has-label={label ? 'true' : undefined}
      style={style}
    >
      <div className="alinea-rac-EditableTable-toolbar">
        {label && (
          <span className="alinea-rac-EditableTable-toolbarLabel">{label}</span>
        )}
        <div className="alinea-rac-EditableTable-toolbarActions">
          <Button
            type="button"
            size="small"
            appearance="outline"
            onPress={addColumn}
          >
            <span data-slot="icon">
              <Icon icon={IcRoundAddCircle} />
            </span>
            Add column
          </Button>
          <Button
            type="button"
            size="small"
            appearance="outline"
            onPress={addRow}
          >
            <span data-slot="icon">
              <Icon icon={IcRoundAddCircle} />
            </span>
            Add row
          </Button>
        </div>
      </div>
      <div className="alinea-rac-EditableTable-editor">
        <label htmlFor={`${tableId}-editor`}>Cell value</label>
        <input
          id={`${tableId}-editor`}
          ref={editorRef}
          className="alinea-rac-EditableTable-editorInput"
          type="text"
          value={editorValue}
          onChange={event => onEditorChange(event.target.value)}
          onFocus={() => setIsEditing(true)}
          onBlur={() => setIsEditing(false)}
          onKeyDown={onEditorKeyDown}
          disabled={!activeCell || activeCell.isRowHeader}
          aria-disabled={!activeCell || activeCell.isRowHeader}
          aria-describedby={`${tableId}-editor-hint`}
        />
        <span
          id={`${tableId}-editor-hint`}
          className="alinea-rac-EditableTable-editorHint"
        >
          Press Tab to return to the grid. Press Enter to edit a cell.
        </span>
      </div>
      <div className="alinea-rac-EditableTable-scroll">
        <table
          className="alinea-rac-EditableTable-table"
          {...gridProps}
          ref={gridRef}
        >
          {caption && <caption>{caption}</caption>}
          <thead
            className="alinea-rac-EditableTable-header"
            {...headerRowGroupProps}
          >
            <tr>
              {gridColumns.map(column => (
                <th
                  key={column.id}
                  scope="col"
                  className={clsx(
                    'alinea-rac-EditableTable-headerCell',
                    column.isRowHeader && 'alinea-rac-EditableTable-rowHeader'
                  )}
                >
                  <div className="alinea-rac-EditableTable-headerCellInner">
                    <span className="alinea-rac-EditableTable-headerLabel">
                      {column.label}
                    </span>
                    {!column.isRowHeader && (
                      <button
                        type="button"
                        className="alinea-rac-EditableTable-iconButton"
                        data-intent="danger"
                        onClick={() => removeColumn(column.id)}
                        disabled={!canRemoveColumn}
                        aria-label={`Remove ${column.label}`}
                      >
                        <Icon icon={IcRoundDelete} />
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className="alinea-rac-EditableTable-body"
            {...bodyRowGroupProps}
          >
            {rows.length === 0 ? (
              <tr>
                <td
                  className="alinea-rac-EditableTable-empty"
                  colSpan={gridColumns.length}
                >
                  No rows yet. Use "Add row" to get started.
                </td>
              </tr>
            ) : (
              collection.rows.map((rowNode, rowIndex) => {
                const row = rowMap.get(String(rowNode.key))
                if (!row) return null
                return (
                  <EditableTableRowItem
                    key={row.id}
                    rowNode={rowNode as GridNode<EditableTableRow>}
                    row={row}
                    rowIndex={rowIndex}
                    cellMetaMap={cellMetaMap}
                    cellIndexMap={cellIndexMap}
                    gridState={gridState}
                    cellRefs={cellRefs}
                    focusedKey={focusedKey}
                    activeCellKey={activeCellKey}
                    isEditing={isEditing}
                    canRemoveRow={canRemoveRow}
                    moveFocusToKey={moveFocusToKey}
                    startEditing={startEditing}
                    onGridCellKeyDown={onGridCellKeyDown}
                    setActiveCellKey={setActiveCellKey}
                    removeRow={removeRow}
                  />
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
