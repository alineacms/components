import clsx from 'clsx'
import {RangeCalendarComponent} from './Calendar.tsx'
import {
  type DateRangePickerProps as AriaDateRangePickerProps,
  Button,
  DateInput,
  DateRangePicker as DateRangePickerPrimitive,
  DateSegment,
  type DateValue,
  Dialog,
  Group
} from 'react-aria-components'
import './DateRangePicker.css'
import {IcRoundCalendarMonth} from '../stories/icons/IcRoundCalendarMonth.tsx'
import {Icon} from './Icon.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import {Popover} from './Popover.tsx'

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
      <Popover>
        <Dialog className="alinea-rac-DateRangePicker-dialog">
          <RangeCalendarComponent />
        </Dialog>
      </Popover>
    </DateRangePickerPrimitive>
  )
}
