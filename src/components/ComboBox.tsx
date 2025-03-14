import clsx from 'clsx'
import {useState} from 'react'
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
  Popover
} from 'react-aria-components'
import {IcRoundCheck} from '../icons/IcRoundCheck.tsx'
import {IcRoundClose} from '../icons/IcRoundClose.tsx'
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './ComboBox.css'

export interface ComboBoxProps<T extends object>
  extends Omit<ComboBoxPrimitiveProps<T>, 'children'>,
    LabelSharedProps {
  items: T[]
  children: (item: T) => React.ReactNode
}

export function ComboBox<T extends {name: string}>({
  className,
  items,
  ...props
}: ComboBoxProps<T>) {
  const [inputValue, setInputValue] = useState('')
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  )

  return (
    <ComboBoxPrimitive
      {...props}
      className={clsx('alinea-rac-Combobox', className)}
      onInputChange={setInputValue} // ✅ Filtering activeren
    >
      <Label {...labelProps(props)}>
        <div className="alinea-rac-ComboboxTrigger">
          <Input className="alinea-rac-ComboboxTrigger-input" />
          <Button className="alinea-rac-ComboboxTrigger-button">
            <IcRoundKeyboardArrowDown />
          </Button>
          <ComboBoxClearButton />
        </div>
        <Popover className="alinea-rac-ComboboxPopover">
          <ListBox
            items={filteredItems}
            className="alinea-rac-ComboboxPopover-listbox"
          >
            {props.children}
          </ListBox>
        </Popover>
      </Label>
    </ComboBoxPrimitive>
  )
}

function ComboBoxClearButton() {
  const [inputValue, setInputValue] = useState('')

  if (!inputValue) return null
  return (
    <Button
      onPress={() => setInputValue('')}
      className="alinea-rac-ComboboxTrigger-clear"
    >
      <IcRoundClose />
    </Button>
  )
}

export function ComboBoxItem({children, ...props}: ListBoxItemProps) {
  return (
    <ListBoxItem
      className="alinea-rac-ComboBoxItem"
      textValue={typeof children === 'string' ? children : props.textValue}
      {...props}
    >
      {({isSelected}) => (
        <>
          {children}
          {isSelected && (
            <IcRoundCheck className="alinea-rac-ComboBoxItem-check" />
          )}
        </>
      )}
    </ListBoxItem>
  )
}
