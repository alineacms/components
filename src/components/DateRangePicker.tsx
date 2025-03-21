import clsx from 'clsx'
import {
  type DateRangePickerProps as AriaDateRangePickerProps,
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateRangePicker as DateRangePickerPrimitive,
  DateSegment,
  type DateValue,
  Dialog,
  Group,
  Heading,
  Popover,
  RangeCalendar
} from 'react-aria-components'

import './DateRangePicker.css'
import {IcRoundCalendarMonth} from '../icons/IcRoundCalendarMonth.tsx'
import {IcRoundKeyboardArrowLeft} from '../icons/IcRoundKeyboardArrowLeft.tsx'
import {IcRoundKeyboardArrowRight} from '../icons/IcRoundKeyboardArrowRight.tsx'
import {Icon} from './Icon.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T>,
    LabelSharedProps {}

export function DateRangePicker<T extends DateValue>({
  className,
  ...props
}: DateRangePickerProps<T>) {
  return (
    <DateRangePickerPrimitive {...props}>
      <Label {...labelProps(props)}>
        <Group className={clsx('alinea-rac-DateRangePicker', className)}>
          <div className="alinea-rac-DateRangePicker-inputs">
            <DateInput
              slot="start"
              className="alinea-rac-DateRangePicker-input"
            >
              {segment => (
                <DateSegment
                  segment={segment}
                  className="alinea-rac-DateRangePicker-input-segment"
                />
              )}
            </DateInput>
            <span
              aria-hidden="true"
              className="alinea-rac-DateRangePicker-separator"
            >
              –
            </span>
            <DateInput slot="end" className="alinea-rac-DateRangePicker-input">
              {segment => (
                <DateSegment
                  segment={segment}
                  className="alinea-rac-DateRangePicker-input-segment"
                />
              )}
            </DateInput>
          </div>
          <Button className="alinea-rac-DateRangePicker-trigger">
            <Icon icon={IcRoundCalendarMonth} />
          </Button>
        </Group>
      </Label>
      <Popover className="alinea-rac-DateRangePicker-popover">
        <Dialog className="alinea-rac-DateRangePicker-dialog">
          <RangeCalendar className="alinea-rac-DateRangePicker-calendar">
            <header className="alinea-rac-DateRangePicker-calendar-header">
              <Button
                slot="previous"
                className="alinea-rac-DateRangePicker-calendar-button"
              >
                <Icon icon={IcRoundKeyboardArrowLeft} />
              </Button>
              <Heading className="alinea-rac-DateRangePicker-calendar-heading" />
              <Button
                slot="next"
                className="alinea-rac-DateRangePicker-calendar-button"
              >
                <Icon icon={IcRoundKeyboardArrowRight} />
              </Button>
            </header>
            <CalendarGrid className="alinea-rac-DateRangePicker-calendar-grid">
              {date => (
                <CalendarCell
                  date={date}
                  className="alinea-rac-DateRangePicker-calendar-cell"
                />
              )}
            </CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </DateRangePickerPrimitive>
  )
}
