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
  extends TimeFieldPrimitiveProps<T>,
    LabelSharedProps {}

export function TimeField<T extends TimeValue>(props: TimeFieldProps<T>) {
  return (
    <TimeFieldPrimitive {...props}>
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
