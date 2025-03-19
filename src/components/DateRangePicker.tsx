import clsx from 'clsx'
import {
  DateRangePicker as AriaDateRangePicker,
  type DateRangePickerProps as AriaDateRangePickerProps,
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateSegment,
  type DateValue,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
  RangeCalendar,
  FieldError,
  type ValidationResult
} from 'react-aria-components'

import './DateRangePicker.css'
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowLeft} from '../icons/IcRoundKeyboardArrowLeft.tsx'
import {IcRoundKeyboardArrowRight} from '../icons/IcRoundKeyboardArrowRight.tsx'
import {Icon} from './Icon.tsx'

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DateRangePicker<T extends DateValue>(props: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker {...props}>
      <Label>{props.label}</Label>
      <div className={clsx('alinea-rac-DateRangePicker-container', props.className)}>
        <Group className="alinea-rac-DateRangePicker-input-wrapper">
          <DateInput slot="start" className="alinea-rac-DateRangePicker-input">
            {segment => (
              <DateSegment segment={segment} className="alinea-rac-DateRangePicker-segment" />
            )}
          </DateInput>
          <span aria-hidden="true" className="alinea-rac-DateRangePicker-separator">–</span>
          <DateInput slot="end" className="alinea-rac-DateRangePicker-input">
            {segment => (
              <DateSegment segment={segment} className="alinea-rac-DateRangePicker-segment" />
            )}
          </DateInput>
          <Button className="alinea-rac-DateRangePicker-trigger">
            <Icon icon={IcRoundKeyboardArrowDown} />
          </Button>
        </Group>
        {props.description && <span className="alinea-rac-DateRangePicker-description">{props.description}</span>}
        {props.errorMessage && <FieldError className="alinea-rac-DateRangePicker-error">{props.errorMessage}</FieldError>}
        <Popover className="alinea-rac-DateRangePicker-popover">
          <Dialog className="alinea-rac-DateRangePicker-dialog">
            <RangeCalendar className="alinea-rac-DateRangePicker-calendar">
              <header className="alinea-rac-DateRangePicker-calendar-header">
                <Button slot="previous" className="alinea-rac-DateRangePicker-calendar-button">
                  <Icon icon={IcRoundKeyboardArrowLeft} />
                </Button>
                <Heading className="alinea-rac-DateRangePicker-calendar-heading" />
                <Button slot="next" className="alinea-rac-DateRangePicker-calendar-button">
                  <Icon icon={IcRoundKeyboardArrowRight} />
                </Button>
              </header>
              <CalendarGrid className="alinea-rac-DateRangePicker-calendar-grid">
                {date => (
                  <CalendarCell date={date} className="alinea-rac-DateRangePicker-calendar-cell" />
                )}
              </CalendarGrid>
            </RangeCalendar>
          </Dialog>
        </Popover>
      </div>
    </AriaDateRangePicker>
  )
}
