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
  Heading
} from 'react-aria-components'
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowLeft} from '../icons/IcRoundKeyboardArrowLeft.tsx'
import {IcRoundKeyboardArrowRight} from '../icons/IcRoundKeyboardArrowRight.tsx'
import {Icon} from './Icon.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import {Popover} from './Popover.tsx'
import './DatePicker.css'

export interface DatePickerProps<T extends DateValue>
  extends DatePickerPrimitiveProps<T>,
    LabelSharedProps {}

export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  return (
    <DatePickerPrimitive {...props}>
      <Label {...labelProps(props)}>
        <Group className={clsx('alinea-rac-DatePicker', props.className)}>
          <DateInput
            className="alinea-rac-DatePicker-input"
            aria-invalid={!!props.errorMessage}
          >
            {segment => (
              <DateSegment
                className="alinea-rac-DatePicker-input-segment"
                segment={segment}
              />
            )}
          </DateInput>
          <Button className="alinea-rac-DatePicker-trigger">
            <Icon icon={IcRoundKeyboardArrowDown} />
          </Button>
        </Group>
      </Label>
      <Popover>
        <Dialog>
          <Calendar className="alinea-rac-DatePicker-calendar">
            <header className="alinea-rac-DatePicker-calendar-header">
              <Button
                slot="previous"
                className="alinea-rac-DatePicker-calendar-button"
              >
                <Icon icon={IcRoundKeyboardArrowLeft} />
              </Button>
              <Heading className="alinea-rac-DatePicker-calendar-heading" />
              <Button
                slot="next"
                className="alinea-rac-DatePicker-calendar-button"
              >
                <Icon icon={IcRoundKeyboardArrowRight} />
              </Button>
            </header>
            <CalendarGrid className="alinea-rac-DatePicker-calendar-grid">
              {date => (
                <CalendarCell
                  date={date}
                  className="alinea-rac-DatePicker-calendar-cell"
                />
              )}
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </DatePickerPrimitive>
  )
}
