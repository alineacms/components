import clsx from 'clsx'
import {
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps
} from 'react-aria-components'
import {Radio as RadioPrimitive, type RadioProps} from 'react-aria-components'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './RadioGroup.css'
import type {PropsWithChildren} from 'react'

export type {RadioProps} from 'react-aria-components'

export function Radio(props: RadioProps) {
  return (
    <RadioPrimitive
      {...props}
      className={clsx('alinea-rac-Radio', props.className)}
    />
  )
}

export interface RadioGroupProps
  extends Omit<AriaRadioGroupProps, 'children'>,
    LabelSharedProps {}

export function RadioGroup({
  children,
  className,
  ...props
}: PropsWithChildren<RadioGroupProps>) {
  return (
    <AriaRadioGroup {...props}>
      <Label {...labelProps(props)}>
        <div className={clsx('alinea-rac-RadioGroup', className)}>
          {children}
        </div>
      </Label>
    </AriaRadioGroup>
  )
}
