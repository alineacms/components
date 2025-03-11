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
  Popover
} from 'react-aria-components'
import {IcRoundCheck} from '../icons/IcRoundCheck.tsx'
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
  children,
  items,
  ...props
}: ComboBoxProps<T>) {
  return (
    <ComboBoxPrimitive {...props}>
      <Label {...labelProps(props)}>
        <div className={clsx('alinea-rac-Combobox', props.className)}>
          <Input className="alinea-rac-Combobox-input" />
          <Button className="alinea-rac-Combobox-button">
            <IcRoundKeyboardArrowDown />
          </Button>
        </div>
        <Popover className="alinea-rac-Combobox-popover">
          <ListBox
            items={items}
            className="alinea-rac-Combobox-popover-listbox"
          >
            {children}
          </ListBox>
        </Popover>
      </Label>
    </ComboBoxPrimitive>
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
