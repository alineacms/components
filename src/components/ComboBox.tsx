import clsx from 'clsx'
import {
  Button,
  ComboBox as ComboboxPrimitive,
  type ComboBoxProps as ComboboxPrimitiveProps,
  Input,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  Popover
} from 'react-aria-components'
import { Label, type LabelSharedProps, labelProps } from './Label.tsx'
import './ComboBox.css'

export interface ComboBoxProps<T extends object>
  extends Omit<ComboboxPrimitiveProps<T>, 'children'>,
    LabelSharedProps {
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function ComboBox<T extends object>({ children, ...props }: ComboBoxProps<T>) {
  return (
    <Label {...labelProps(props)}>
      <ComboboxPrimitive
        {...props}
        className={clsx('alinea-rac-Combobox', props.className)}
      >
        <div>
          <Input />
          <Button>▼</Button>
        </div>
        <Popover>
          <ListBox>{children}</ListBox>
        </Popover>
      </ComboboxPrimitive>
    </Label>
  )
}

export function ComboBoxItem(props: ListBoxItemProps) {
  return <ListBoxItem {...props} />
}
