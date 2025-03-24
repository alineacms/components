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
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'

import './DatePicker.css'
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowLeft} from '../icons/IcRoundKeyboardArrowLeft.tsx'
import {IcRoundKeyboardArrowRight} from '../icons/IcRoundKeyboardArrowRight.tsx'
import {Icon} from './Icon.tsx'
import {Popover} from './Popover.tsx'

export interface DatePickerProps<T extends DateValue>
  extends DatePickerPrimitiveProps<T>,
    LabelSharedProps {}

export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  return (
    <DatePickerPrimitive {...props}>
      <Label {...labelProps(props)}>
        <div
          className={clsx('alinea-rac-DatePicker-container', props.className)}
        >
          <Group className="alinea-rac-DatePicker-input-wrapper">
            <DateInput
              className="alinea-rac-DatePicker-input"
              aria-invalid={!!props.errorMessage}
            >
              {segment => (
                <DateSegment
                  className="alinea-rac-DatePicker-segment"
                  segment={segment}
                />
              )}
            </DateInput>
            <Button className="alinea-rac-DatePicker-trigger">
              <Icon icon={IcRoundKeyboardArrowDown} />
            </Button>
          </Group>
          <Popover>
            <Dialog className="alinea-rac-DatePicker-dialog">
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
        </div>
      </Label>
    </DatePickerPrimitive>
  )
}
