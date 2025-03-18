import clsx from 'clsx'
import {
  DateInput,
  DateSegment,
  DateField as DateFieldPrimitive,
  type DateFieldProps as DateFieldPrimitiveProps,
  type DateValue
} from 'react-aria-components'

import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './DateField.css'

export interface DateFieldProps<T extends DateValue>
  extends Omit<DateFieldPrimitiveProps<T>, 'children'>,
    LabelSharedProps {}

export function DateField<T extends DateValue>({className, ...props}: DateFieldProps<T>) {
  return (
    <DateFieldPrimitive {...props} className={clsx('alinea-rac-DateField', className)}>
      <Label {...labelProps(props)}>
        <div className="alinea-rac-DateField-wrapper">
          <DateInput className="alinea-rac-DateField-input">
            {segment => (
              <DateSegment
                className="alinea-rac-DateField-segment"
                segment={segment}
              />
            )}
          </DateInput>
        </div>
      </Label>
    </DateFieldPrimitive>
  )
}
