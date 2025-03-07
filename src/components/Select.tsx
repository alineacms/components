import clsx from 'clsx'
import type {
  ListBoxItemProps,
  SelectProps as SelectPrimitiveProps
} from 'react-aria-components'
import {
  Button,
  FieldError,
  ListBox,
  ListBoxItem,
  Popover,
  Select as SelectPrimitive,
  SelectValue,
  Text
} from 'react-aria-components'
import {Label} from './Label.tsx'

import './Select.css'

export interface SelectProps<T extends object>
  extends Omit<SelectPrimitiveProps<T>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <Label label={label} errorMessage={errorMessage} description={description}>
      <SelectPrimitive
        {...props}
        className={clsx('alinea-rac-Select', props.className)}
      >
        <Button>
          <SelectValue />
          <span aria-hidden="true">▼</span>
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
