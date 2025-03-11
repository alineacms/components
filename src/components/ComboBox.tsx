import clsx from 'clsx'
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
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundClose} from '../icons/IcRoundClose.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import {useContext} from 'react'
import './ComboBox.css'

export interface ComboBoxProps<T extends object>
  extends Omit<ComboBoxPrimitiveProps<T>, 'children'>,
    LabelSharedProps {
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

function ComboBoxClearButton() {
  const state = useContext(ComboBoxStateContext)
  if (!state?.inputValue) return null

  return (
    <button
      type="button"
      className="alinea-rac-Combobox-button-clear"
      onClick={() => state.setInputValue('')}
    >
      <IcRoundClose />
    </button>
  )
}

export function ComboBox<T extends object>({
  children,
  items,
  ...props
}: ComboBoxProps<T>) {
  return (
    <Label {...labelProps(props)}>
      <ComboBoxPrimitive
        {...props}
        className={clsx('alinea-rac-Combobox', props.className)}
      >
        <div className="alinea-rac-Combobox-wrapper">
          <Input className="alinea-rac-Combobox-input" />
          <Button className="alinea-rac-Combobox-button">
            <IcRoundKeyboardArrowDown />
          </Button>
          <ComboBoxClearButton />
        </div>
        <Popover className="alinea-rac-Combobox-popover">
          <ListBox items={items} className="alinea-rac-Combobox-popover-listbox">
            {children}
          </ListBox>
        </Popover>
      </ComboBoxPrimitive>
    </Label>
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
          {isSelected && <IcRoundCheck className="alinea-rac-ComboBoxItem-check" />}
        </>
      )}
    </ListBoxItem>
  )
}

