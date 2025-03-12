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
  children,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <SelectPrimitive {...props}>
      <Label {...labelProps(props)}>
        <div className={clsx('alinea-rac-Select', props.className)}>
          <Button
            className="alinea-rac-Select-button"
            data-expanded={props.isOpen}
          >
            <SelectValue className="alinea-rac-Select-button-value" />
            <IcRoundKeyboardArrowDown className="alinea-rac-Select-button-arrow" />
          </Button>
          {!props.isRequired && <SelectClearButton />}
        </div>
        <Popover className="alinea-rac-SelectPopover">
          <ListBox items={items} className="alinea-rac-SelectPopover-listbox">
            {children}
          </ListBox>
        </Popover>
      </Label>
    </SelectPrimitive>
  )
}

function SelectClearButton() {
  const state = useContext(SelectStateContext)
  if (!state?.selectedKey) return null
  return (
    <button
      type="button"
      onClick={() => state.setSelectedKey(null)}
      className="alinea-rac-SelectClearButton"
    >
      <IcRoundClose />
    </button>
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
