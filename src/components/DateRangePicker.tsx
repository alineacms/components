import clsx from 'clsx'
import {
  DateRangePicker as DateRangePickerPrimitive,
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
  Popover,
  RangeCalendar,
} from 'react-aria-components'

import './DateRangePicker.css'
import {Label, labelProps, type LabelSharedProps} from './Label.tsx'
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowLeft} from '../icons/IcRoundKeyboardArrowLeft.tsx'
import {IcRoundKeyboardArrowRight} from '../icons/IcRoundKeyboardArrowRight.tsx'
import {Icon} from './Icon.tsx'

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T>, LabelSharedProps {}

export function DateRangePicker<T extends DateValue>(props: DateRangePickerProps<T>) {
  return (
    <DateRangePickerPrimitive {...props} className="alinea-rac-DateRangePicker">
      <Label {...labelProps(props)}>
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
        </div>
      </Label>
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
    </DateRangePickerPrimitive>
  )
}
