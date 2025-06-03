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
  Group,
  Heading,
  Popover
} from 'react-aria-components'
import {Label} from './Label.tsx'

import './DatePicker.css'

export interface DatePickerProps<T extends DateValue>
  extends DatePickerPrimitiveProps<T> {
  label?: string
  description?: string
  errorMessage?: string
}

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DatePickerProps<T>) {
  return (
    <Label label={label} errorMessage={errorMessage} description={description}>
      <DatePickerPrimitive
        {...props}
        className={clsx('alinea-rac-DatePicker', props.className)}
      >
        <Group>
          <div className="alinea-rac-DateField-input">
            <DateInput>
              {segment => (
                <DateSegment
                  segment={segment}
                  className="alinea-rac-DateField-segment"
                />
              )}
            </DateInput>
          </div>
          <Button>▼</Button>
        </Group>
        <Popover>
          <Dialog>
            <Calendar>
              <header>
                <Button slot="previous">◀</Button>
                <Heading style={{textAlign: 'center'}} />
                <Button slot="next">▶</Button>
              </header>
              <CalendarGrid>
                {date => <CalendarCell date={date} />}
              </CalendarGrid>
            </Calendar>
          </Dialog>
        </Popover>
      </DatePickerPrimitive>
    </Label>
  )
}
