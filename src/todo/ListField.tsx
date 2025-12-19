import {useId} from '@react-aria/utils'
import {ListCollection} from '@react-stately/list'
import {
  SelectionManager,
  useMultipleSelectionState
} from '@react-stately/selection'
import type {DropTarget, Key, Node} from '@react-types/shared'
import clsx from 'clsx'
import {useMemo, useRef} from 'react'
import {ListKeyboardDelegate, mergeProps, useLocale} from 'react-aria'
import {useDragAndDrop} from 'react-aria-components'
import type {
  DraggableCollectionState,
  DroppableCollectionState
} from 'react-stately'
import {Button} from '../components/Button.tsx'
import './ListField.css'

export interface ListFieldItemProps {
  id: string
  title?: React.ReactNode
  children: React.ReactNode
  onRemove?: () => void
  isExpanded?: boolean
  onToggleExpand?: () => void
  draggableState?: DraggableCollectionState
  dragAndDropHooks?: ReturnType<typeof useDragAndDrop>['dragAndDropHooks']
  collectionId?: string
}

function ListFieldItem({
  id,
  title,
  children,
  onRemove,
  isExpanded = true,
  onToggleExpand,
  draggableState,
  dragAndDropHooks,
  collectionId
}: ListFieldItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isDragging = draggableState?.isDragging(id) ?? false

  const {dragProps, dragButtonProps} =
    draggableState && dragAndDropHooks?.useDraggableItem
      ? dragAndDropHooks.useDraggableItem(
          {key: id, hasDragButton: true},
          draggableState
        )
      : {dragProps: {}, dragButtonProps: {}}

  return (
    <div
      ref={ref}
      {...dragProps}
      className="alinea-ListField-item"
      data-dragging={isDragging}
      data-key={id}
      data-collection={collectionId}
    >
      <div className="alinea-ListField-header">
        <Button
          {...mergeProps(dragProps, dragButtonProps)}
          appearance="plain"
          size="square-petite"
          className="alinea-ListField-handle"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </Button>
        <div className="alinea-ListField-title">{title}</div>
        <div className="alinea-ListField-actions">
          <Button appearance="plain" size="square-petite" onPress={() => {}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
          </Button>
          <Button
            appearance="plain"
            size="square-petite"
            onPress={onToggleExpand}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
          </Button>
          {onRemove && (
            <Button appearance="plain" size="square-petite" onPress={onRemove}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </Button>
          )}
        </div>
      </div>
      {isExpanded && <div className="alinea-ListField-content">{children}</div>}
    </div>
  )
}

export interface ListFieldProps<T> {
  items: T[]
  onReorder: (from: number, to: number) => void
  onRemove?: (index: number) => void
  children: (item: T, index: number) => React.ReactNode
  getItemKey: (item: T) => string
  getItemTitle?: (item: T) => React.ReactNode
  getItemTextValue?: (item: T) => string
}

export function ListField<T>({
  items,
  onReorder,
  onRemove,
  children,
  getItemKey,
  getItemTitle,
  getItemTextValue
}: ListFieldProps<T>) {
  const listRef = useRef<HTMLDivElement>(null)
  const {direction} = useLocale()
  const collectionId = useId()

  const nodes = useMemo(() => {
    return items.map(
      (item, index) =>
        ({
          type: 'item',
          key: getItemKey(item),
          value: item,
          level: 0,
          hasChildNodes: false,
          childNodes: [],
          rendered: null,
          textValue:
            getItemTextValue?.(item) ??
            (typeof getItemTitle?.(item) === 'string'
              ? (getItemTitle(item) as string)
              : getItemKey(item)),
          index
        }) as Node<T>
    )
  }, [items, getItemKey, getItemTitle, getItemTextValue])

  const collection = useMemo(() => new ListCollection(nodes), [nodes])

  const selectionState = useMultipleSelectionState({
    selectionMode: 'none'
  })

  const selectionManager = useMemo(
    () => new SelectionManager(collection, selectionState),
    [collection, selectionState]
  )

  const {dragAndDropHooks} = useDragAndDrop({
    getItems: (keys: Set<Key>) =>
      [...keys].map(key => ({
        'text/plain': String(key)
      })),
    onReorder: e => {
      const dragKey = [...e.keys][0]
      if (dragKey == null) return

      const dragKeyStr = String(dragKey)
      const targetKeyStr = String(e.target.key)
      const fromIndex = items.findIndex(item => getItemKey(item) === dragKeyStr)
      const targetIndex = items.findIndex(
        item => getItemKey(item) === targetKeyStr
      )
      if (fromIndex === -1 || targetIndex === -1) return

      let toIndex =
        e.target.dropPosition === 'before' ? targetIndex : targetIndex + 1

      if (fromIndex < toIndex) toIndex -= 1
      if (toIndex === fromIndex) return
      onReorder(fromIndex, toIndex)
    }
  })

  const draggableState = dragAndDropHooks.useDraggableCollectionState?.({
    collection,
    selectionManager
  })

  if (draggableState && dragAndDropHooks.useDraggableCollection) {
    dragAndDropHooks.useDraggableCollection({}, draggableState, listRef)
  }

  const droppableState = dragAndDropHooks.useDroppableCollectionState?.({
    collection,
    selectionManager
  })

  const keyboardDelegate = useMemo(() => {
    return new ListKeyboardDelegate({
      collection,
      ref: listRef,
      layout: 'stack',
      direction
    })
  }, [collection, direction])

  const dropTargetDelegate = useMemo(() => {
    return new dragAndDropHooks.ListDropTargetDelegate(collection, listRef, {
      layout: 'stack',
      direction
    })
  }, [collection, direction, dragAndDropHooks.ListDropTargetDelegate])

  const droppableCollection =
    droppableState && dragAndDropHooks.useDroppableCollection
      ? dragAndDropHooks.useDroppableCollection(
          {keyboardDelegate, dropTargetDelegate},
          droppableState,
          listRef
        )
      : null

  return (
    <div
      ref={listRef}
      {...(droppableCollection?.collectionProps ?? {})}
      data-collection={collectionId}
      className="alinea-ListField"
    >
      {items.map((item, index) => {
        const key = getItemKey(item)
        return (
          <div key={key} className="alinea-ListField-slot">
            {droppableState && (
              <ListFieldDropIndicator
                dragAndDropHooks={dragAndDropHooks}
                state={droppableState}
                target={{type: 'item', key, dropPosition: 'before'}}
              />
            )}
            <ListFieldItem
              id={key}
              title={getItemTitle ? getItemTitle(item) : undefined}
              onRemove={onRemove ? () => onRemove(index) : undefined}
              draggableState={draggableState}
              dragAndDropHooks={dragAndDropHooks}
              collectionId={collectionId}
            >
              {children(item, index)}
            </ListFieldItem>
          </div>
        )
      })}
      {droppableState && items.length > 0 && (
        <ListFieldDropIndicator
          dragAndDropHooks={dragAndDropHooks}
          state={droppableState}
          target={{
            type: 'item',
            key: getItemKey(items[items.length - 1]),
            dropPosition: 'after'
          }}
        />
      )}
    </div>
  )
}

interface ListFieldDropIndicatorProps {
  target: DropTarget
  state: DroppableCollectionState
  dragAndDropHooks: ReturnType<typeof useDragAndDrop>['dragAndDropHooks']
}

function ListFieldDropIndicator({
  target,
  state,
  dragAndDropHooks
}: ListFieldDropIndicatorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const {dropIndicatorProps, isDropTarget, isHidden} =
    dragAndDropHooks.useDropIndicator
      ? dragAndDropHooks.useDropIndicator({target}, state, ref)
      : {dropIndicatorProps: {}, isDropTarget: false, isHidden: false}

  if (isHidden) return null

  return (
    <div
      ref={ref}
      {...dropIndicatorProps}
      className={clsx('alinea-ListField-dropIndicator')}
      data-drop-target={isDropTarget}
    />
  )
}
