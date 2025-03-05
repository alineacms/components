import {
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps,
  type ValidationResult
} from 'react-aria-components'
import {Radio as RadioPrimitive, type RadioProps} from 'react-aria-components'
import './RadioGroup.css'
import clsx from 'clsx'
import {Label} from './Label.tsx'

export type {RadioProps} from 'react-aria-components'

export function Radio(props: RadioProps) {
  return (
    <RadioPrimitive
      {...props}
      className={clsx('alinea-rac-Radio', props.className)}
    />
  )
}

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'children'> {
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  isRequired?: boolean
}

export function RadioGroup({
  label,
  description,
  errorMessage,
  isRequired,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup
      {...props}
      className={clsx('alinea-rac-RadioGroup', props.className)}
      isRequired={isRequired}
    >
      {label && (
        <Label
          label={label}
          description={description}
          errorMessage={errorMessage}
        >
          {children}
        </Label>
      )}
      {!label && children}
    </AriaRadioGroup>
  )
}
