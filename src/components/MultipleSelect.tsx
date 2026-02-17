import clsx from 'clsx'
import {type ReactNode, useRef} from 'react'
import {useFilter} from 'react-aria'
import {
  Autocomplete,
  Button,
  Group,
  Input,
  type Key,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  SearchField,
  Select as SelectPrimitive,
  type SelectProps as SelectPrimitiveProps,
  SelectValue,
  TagGroup,
  TagList
} from 'react-aria-components'
import {IcRoundCheck} from '../stories/icons/IcRoundCheck.tsx'
import {IcRoundClose} from '../stories/icons/IcRoundClose.tsx'
import {IcRoundKeyboardArrowDown} from '../stories/icons/IcRoundKeyboardArrowDown.tsx'
import {Icon} from './Icon.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import {Popover} from './Popover.tsx'
import {Tag} from './TagGroup.tsx'

import './MultipleSelect.css'

export interface SelectedKey {
  id: Key
  name: string
}

export interface MultipleSelectProps<T extends object>
  extends LabelSharedProps,
    Omit<
      SelectPrimitiveProps<T, 'multiple'>,
      'children' | 'selectionMode' | 'className'
    > {
  items?: Iterable<T>
  className?: string
  children: React.ReactNode | ((item: T) => React.ReactNode)
  tag?: (item: T) => React.ReactNode
  renderEmptyState?: () => React.ReactNode
}

export function MultipleSelect<T extends SelectedKey>({
  children,
  items,
  className,
  tag,
  renderEmptyState,
  ...props
}: MultipleSelectProps<T>) {
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const {contains} = useFilter({sensitivity: 'base'})

  return (
    <SelectPrimitive
      {...(props as any)}
      selectionMode="multiple"
      className={clsx('alinea-rac-MultipleSelect', className)}
    >
      {props.label ? (
        <Label {...labelProps(props)}>
          <MultipleSelectTrigger triggerRef={triggerRef} tag={tag} {...props} />
        </Label>
      ) : (
        <MultipleSelectTrigger triggerRef={triggerRef} tag={tag} {...props} />
      )}
      <Popover
        triggerRef={triggerRef}
        className="alinea-rac-MultipleSelectPopover"
      >
        <Autocomplete filter={contains}>
          <SearchField
            aria-label="Search"
            autoFocus
            className="alinea-rac-MultipleSelect-search"
          >
            <Input
              className="alinea-rac-MultipleSelect-search-input"
              placeholder="Search…"
            />
            <Button className="alinea-rac-MultipleSelect-search-clear">
              <IcRoundClose />
            </Button>
          </SearchField>
          <ListBox
            items={items}
            renderEmptyState={
              renderEmptyState ??
              (() => (
                <p className="alinea-rac-MultipleSelectPopover-empty">
                  No options
                </p>
              ))
            }
            className="alinea-rac-MultipleSelectPopover-listbox"
          >
            {children}
          </ListBox>
        </Autocomplete>
      </Popover>
    </SelectPrimitive>
  )
}

interface MultipleSelectTriggerProps<T extends SelectedKey> {
  triggerRef: React.RefObject<HTMLDivElement | null>
  tag?: (item: T) => React.ReactNode
  isRequired?: boolean
}

function MultipleSelectTrigger<T extends SelectedKey>({
  triggerRef,
  tag: renderTag
}: MultipleSelectTriggerProps<T>) {
  return (
    <Group ref={triggerRef} className="alinea-rac-MultipleSelect-container">
      <Button className="alinea-rac-MultipleSelect-trigger">
        <SelectValue<T> className="alinea-rac-MultipleSelect-value">
          {({selectedItems, state}) => {
            const items = selectedItems?.filter(
              (item): item is T => item != null
            )
            if (!items?.length) {
              return (
                <span className="alinea-rac-MultipleSelect-placeholder">
                  Select items…
                </span>
              )
            }
            return (
              <TagGroup
                className="alinea-rac-MultipleSelect-tagGroup"
                aria-label="Selected items"
                onRemove={keys => {
                  if (Array.isArray(state.value)) {
                    state.setValue(state.value.filter(k => !keys.has(k)))
                  }
                }}
              >
                <TagList
                  items={items}
                  className="alinea-rac-MultipleSelect-tagGroup-tagList"
                >
                  {renderTag ??
                    (item => <Tag data-shape="circle">{item.name}</Tag>)}
                </TagList>
              </TagGroup>
            )
          }}
        </SelectValue>
        <Icon
          icon={IcRoundKeyboardArrowDown}
          className="alinea-rac-MultipleSelect-trigger-icon"
        />
      </Button>
    </Group>
  )
}

export interface MultipleSelectItemProps extends ListBoxItemProps {
  children: ReactNode
}

export function MultipleSelectItem({
  children,
  ...props
}: MultipleSelectItemProps) {
  return (
    <ListBoxItem
      className="alinea-rac-MultipleSelectItem"
      textValue={typeof children === 'string' ? children : props.textValue}
      {...props}
    >
      {({isSelected}) => (
        <>
          {isSelected && (
            <IcRoundCheck className="alinea-rac-MultipleSelectItem-check" />
          )}
          {children}
        </>
      )}
    </ListBoxItem>
  )
}
