import clsx from 'clsx'
import {type ReactNode, useContext} from 'react'
import type {
  ListBoxItemProps,
  SelectProps as SelectPrimitiveProps
} from 'react-aria-components'
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select as SelectPrimitive,
  SelectStateContext,
  SelectValue
} from 'react-aria-components'
import {IcRoundCheck} from '../icons/IcRoundCheck.tsx'
import {IcRoundClose} from '../icons/IcRoundClose.tsx'
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './Select.css'

export interface SelectProps<T extends object>
  extends Omit<SelectPrimitiveProps<T>, 'children'>,
    LabelSharedProps {
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function Select<T extends object>({
  className,
  ...props
}: SelectProps<T>) {
  return (
    <SelectPrimitive
      {...props}
      className={clsx('alinea-rac-Select', className)}
    >
      <Label {...labelProps(props)}>
        <SelectTrigger {...props} />
        <SelectPopover {...props} />
      </Label>
    </SelectPrimitive>
  )
}

function SelectTrigger<T extends object>({
  children,
  items,
  ...props
}: SelectProps<T>) {
  const state = useContext(SelectStateContext)
  const hasClear = Boolean(!props.isRequired && state?.selectedKey)
  return (
    <div className="alinea-rac-SelectTrigger">
      <Button
        className="alinea-rac-SelectTrigger-button"
        data-expanded={props.isOpen}
        data-clear={hasClear || undefined}
      >
        <SelectValue className="alinea-rac-SelectTrigger-button-value" />
        <IcRoundKeyboardArrowDown className="alinea-rac-SelectTrigger-button-arrow" />
      </Button>
      {!props.isRequired && <SelectClear />}
    </div>
  )
}

function SelectPopover<T extends object>(props: SelectProps<T>) {
  const state = useContext(SelectStateContext)
  const hasClear = Boolean(!props.isRequired && state?.selectedKey)
  return (
    <Popover
      className="alinea-rac-SelectPopover"
      data-clear={hasClear || undefined}
    >
      <ListBox items={props.items} className="alinea-rac-SelectPopover-listbox">
        {props.children}
      </ListBox>
    </Popover>
  )
}

function SelectClear() {
  const state = useContext(SelectStateContext)
  if (!state?.selectedKey) return null
  return (
    <Button
      slot={null}
      onPress={() => state?.setSelectedKey(null)}
      className="alinea-rac-SelectClear"
    >
      <IcRoundClose />
    </Button>
  )
}

interface SelectItemProps extends ListBoxItemProps {
  children: ReactNode
}

export function SelectItem({children, ...props}: SelectItemProps) {
  return (
    <ListBoxItem
      className="alinea-rac-SelectItem"
      textValue={typeof children === 'string' ? children : props.textValue}
      {...props}
    >
      {({isSelected}) => {
        return (
          <>
            {isSelected && (
              <IcRoundCheck className="alinea-rac-SelectItem-check" />
            )}
            {children}
          </>
        )
      }}
    </ListBoxItem>
  )
}
