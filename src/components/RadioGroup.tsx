import clsx from 'clsx'
import {
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps
} from 'react-aria-components'
import {Radio as RadioPrimitive, type RadioProps} from 'react-aria-components'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './RadioGroup.css'

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
  extends AriaRadioGroupProps,
    LabelSharedProps {}

export function RadioGroup({children, ...props}: RadioGroupProps) {
  return (
    <Label {...labelProps(props)}>
      <AriaRadioGroup
        {...props}
        className={clsx('alinea-rac-RadioGroup', props.className)}
      >
        {children}
      </AriaRadioGroup>
    </Label>
  )
}
