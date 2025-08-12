import clsx from 'clsx'
import {Calendar} from './Calendar.tsx'
import {
  Button,
  DateInput,
  DatePicker as DatePickerPrimitive,
  type DatePickerProps as DatePickerPrimitiveProps,
  DateSegment,
  type DateValue,
  Dialog,
  Group
} from 'react-aria-components'
import {IcRoundKeyboardArrowDown} from '../stories/icons/IcRoundKeyboardArrowDown.tsx'
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
          <Calendar />
        </Dialog>
      </Popover>
    </DatePickerPrimitive>
  )
}