import clsx from 'clsx'
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker as DatePickerPrimitive,
  type DatePickerProps as DatePickerPrimitiveProps,
  DateSegment,
  type DateValue,
  Dialog,
  FieldError,
  Group,
  Heading,
  Popover,
  Text,
  type ValidationResult
} from 'react-aria-components'
import {Label} from './Label.tsx'

import './DatePicker.css'

export interface DatePickerProps<T extends DateValue>
  extends DatePickerPrimitiveProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DatePickerProps<T>) {
  return (
    <DatePickerPrimitive
      {...props}
      className={clsx('alinea-rac-DatePicker', props.className)}
    >
      <Label>{label}</Label>
      <Group>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <Button>▼</Button>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog>
          <Calendar>
            <header>
              <Button slot="previous">◀</Button>
              <Heading style={{textAlign: 'center'}} />
              <Button slot="next">▶</Button>
            </header>
            <CalendarGrid>{date => <CalendarCell date={date} />}</CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </DatePickerPrimitive>
  )
}
