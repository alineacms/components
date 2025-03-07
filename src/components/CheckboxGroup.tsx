import {
  CheckboxGroup as CheckboxGroupPrimitive,
  type CheckboxGroupProps as CheckboxPrimitiveGroupProps
} from 'react-aria-components'

import clsx from 'clsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './CheckboxGroup.css'

export interface CheckboxGroupProps
  extends CheckboxPrimitiveGroupProps,
    LabelSharedProps {}

export function CheckboxGroup({children, ...props}: CheckboxGroupProps) {
  return (
    <Label {...labelProps(props)}>
      <CheckboxGroupPrimitive
        {...props}
        className={clsx('alinea-rac-CheckboxGroup', props.className)}
      >
        {children}
      </CheckboxGroupPrimitive>
    </Label>
  )
}
