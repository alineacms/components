import clsx from 'clsx'
import {
  Button,
  ComboBox as ComboboxPrimitive,
  type ComboBoxProps as ComboboxPrimitiveProps,
  FieldError,
  Input,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  Popover,
  Text,
  type ValidationResult
} from 'react-aria-components'
import {Label} from './Label.tsx'

import './ComboBox.css'

export interface ComboBoxProps<T extends object>
  extends Omit<ComboboxPrimitiveProps<T>, 'children'> {
  label?: string
  description?: string | null
  errorMessage?: string | ((validation: ValidationResult) => string)
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function ComboBox<T extends object>({
  label,
  description,
  errorMessage,
  children,
  ...props
}: ComboBoxProps<T>) {
  return (
    <ComboboxPrimitive
      {...props}
      className={clsx('alinea-rac-Combobox', props.className)}
    >
      <Label>{label}</Label>
      <div>
        <Input />
        <Button>▼</Button>
      </div>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox>{children}</ListBox>
      </Popover>
    </ComboboxPrimitive>
  )
}

export function ComboBoxItem(props: ListBoxItemProps) {
  return <ListBoxItem {...props} />
}
