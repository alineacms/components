import clsx from 'clsx'
import {
  DateInput,
  DateSegment,
  TimeField as TimeFieldPrimitive,
  type TimeFieldProps as TimeFieldPrimitiveProps,
  type TimeValue
} from 'react-aria-components'

import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './TimeField.css'

export interface TimeFieldProps<T extends TimeValue>
  extends Omit<TimeFieldPrimitiveProps<T>, 'children'>,
    LabelSharedProps {
  use24HourClock?: boolean
}

export function TimeField<T extends TimeValue>({
  use24HourClock = false,
  ...props
}: TimeFieldProps<T>) {
  return (
    <TimeFieldPrimitive {...props} hourCycle={use24HourClock ? 24 : 12}>
      <Label {...labelProps(props)}>
        <div className={clsx('alinea-rac-TimeField', props.className)}>
          <DateInput className="alinea-rac-TimeField-input">
            {segment => (
              <DateSegment
                className="alinea-rac-TimeField-segment"
                segment={segment}
              />
            )}
          </DateInput>
        </div>
      </Label>
    </TimeFieldPrimitive>
  )
}
