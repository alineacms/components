import clsx from 'clsx'
import {type ReactNode, useContext} from 'react'
import type {
  ComboBoxProps as ComboBoxPrimitiveProps,
  ListBoxItemProps
} from 'react-aria-components'
import {
  Button,
  ComboBox as ComboBoxPrimitive,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
  ComboBoxStateContext
} from 'react-aria-components'
import {IcRoundCheck} from '../icons/IcRoundCheck.tsx'
import {IcRoundClose} from '../icons/IcRoundClose.tsx'
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './ComboBox.css'

export interface ComboBoxProps<T extends object>
  extends Omit<ComboBoxPrimitiveProps<T>, 'children'>,
    LabelSharedProps {
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function ComboBox<T extends object>({
  className,
  ...props
}: ComboBoxProps<T>) {
  return (
    <ComboBoxPrimitive
      {...props}
      className={clsx('alinea-rac-Combobox', className)}
    >
      <Label {...labelProps(props)}>
        <ComboBoxTrigger {...props} />
        <ComboBoxPopover {...props} />
      </Label>
    </ComboBoxPrimitive>
  )
}

function ComboBoxTrigger<T extends object>({
  children,
  items,
  ...props
}: ComboBoxProps<T>) {
  const state = useContext(ComboBoxStateContext)
  const hasClear = Boolean(state?.inputValue)

  return (
    <div className="alinea-rac-ComboboxTrigger">
      <Input className="alinea-rac-ComboboxTrigger-input" />
      <Button className="alinea-rac-ComboboxTrigger-button">
        <IcRoundKeyboardArrowDown className="alinea-rac-ComboboxTrigger-button-arrow" />
      </Button>
      {hasClear && <ComboBoxClear />}
    </div>
  )
}

function ComboBoxPopover<T extends object>(props: ComboBoxProps<T>) {
  const state = useContext(ComboBoxStateContext)
  const hasClear = Boolean(state?.inputValue)

  return (
    <Popover className="alinea-rac-ComboboxPopover" data-clear={hasClear || undefined}>
      <ListBox items={props.items} className="alinea-rac-ComboboxPopover-listbox">
        {props.children}
      </ListBox>
    </Popover>
  )
}

function ComboBoxClear() {
  const state = useContext(ComboBoxStateContext)
  if (!state?.inputValue) return null
  return (
    <Button
      slot={null}
      onPress={() => state?.setInputValue('')}
      className="alinea-rac-ComboboxClear"
    >
      <IcRoundClose />
    </Button>
  )
}

interface ComboBoxItemProps extends ListBoxItemProps {
  children: ReactNode
}

export function ComboBoxItem({children, ...props}: ComboBoxItemProps) {
  return (
    <ListBoxItem
      className="alinea-rac-ComboBoxItem"
      textValue={typeof children === 'string' ? children : props.textValue}
      {...props}
    >
      {({isSelected}) => (
        <>
          {children}
          {isSelected && <IcRoundCheck className="alinea-rac-ComboBoxItem-check" />}
        </>
      )}
    </ListBoxItem>
  )
}
