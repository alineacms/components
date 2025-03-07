import clsx from 'clsx'
import {
  CheckboxGroup as CheckboxGroupPrimitive,
  type CheckboxGroupProps as CheckboxPrimitiveGroupProps
} from 'react-aria-components'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './CheckboxGroup.css'
import type {PropsWithChildren} from 'react'

export interface CheckboxGroupProps
  extends Omit<CheckboxPrimitiveGroupProps, 'children'>,
    LabelSharedProps {}

export function CheckboxGroup({
  children,
  className,
  ...props
}: PropsWithChildren<CheckboxGroupProps>) {
  return (
    <CheckboxGroupPrimitive {...props}>
      <Label {...labelProps(props)}>
        <div className={clsx('alinea-rac-CheckboxGroup', className)}>
          {children}
        </div>
      </Label>
    </CheckboxGroupPrimitive>
  )
}
