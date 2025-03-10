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
  SelectValue
} from 'react-aria-components'
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
    <Label {...labelProps(props)}>
      <SelectPrimitive
        {...props}
        className={clsx('alinea-rac-Select', props.className)}
      >
        <Button>
          <SelectValue />
          <span className="alinea-rac-Select-arrow" aria-hidden="true">
            ▼
          </span>
        </Button>
        <Popover>
          <ListBox items={items}>{children}</ListBox>
        </Popover>
      </SelectPrimitive>
    </Label>
  )
}

export function SelectItem(props: ListBoxItemProps) {
  return <ListBoxItem {...props} />
}
