import clsx from 'clsx'
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
  SelectValue,
  SelectStateContext
} from 'react-aria-components'
import {IcRoundCheck} from '../icons/IcRoundCheck.tsx'
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './Select.css'
import type {ReactNode} from 'react'
import {IcRoundClose} from '../icons/IcRoundClose.tsx'
import {useContext} from 'react'

export interface SelectProps<T extends object>
  extends Omit<SelectPrimitiveProps<T>, 'children'>,
    LabelSharedProps {
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

function SelectClearButton() {
  const state = useContext(SelectStateContext)
  if (!state?.selectedKey) return null
  return (
    <button
      type="button"
      className="alinea-rac-Select-button-clear"
      onClick={() => state.setSelectedKey(null)}
    >
      <IcRoundClose />
    </button>
  )
}

export function Select<T extends object>({
  children,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <Label {...labelProps(props)}>
      <SelectPrimitive
        {...props}
        className={clsx('alinea-rac-Select', props.className)}
      >
        <div className="alinea-rac-Select-wrapper">
          <Button
            className="alinea-rac-Select-button"
            data-expanded={props.isOpen}
          >
            <SelectValue className="alinea-rac-Select-button-value" />
            <IcRoundKeyboardArrowDown className="alinea-rac-Select-button-arrow" />
          </Button>
          <SelectClearButton />
        </div>
        <Popover className="alinea-rac-Select-popover">
          <ListBox items={items} className="alinea-rac-Select-popover-listbox">
            {children}
          </ListBox>
        </Popover>
      </SelectPrimitive>
    </Label>
  )
}

interface SelectItemProps extends ListBoxItemProps {
  children: ReactNode
}

export function SelectItem({children, ...props}: SelectItemProps) {
  return (
    <ListBoxItem {...props} className="alinea-rac-SelectItem">
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