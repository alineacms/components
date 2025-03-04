import {
  CheckboxGroup as CheckboxGroupPrimitive,
  type CheckboxGroupProps as CheckboxPrimitiveGroupProps,
  FieldError,
  type ValidationResult
} from 'react-aria-components'

import {
  Checkbox as CheckboxPrimitive,
  type CheckboxProps
} from 'react-aria-components'
import './CheckboxGroup.css'
import clsx from 'clsx'
import {Label} from './Label.tsx' 

export type {CheckboxProps} from 'react-aria-components'

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive
      {...props}
      className={clsx('alinea-rac-Checkbox', props.className)}
    />
  )
}

export interface CheckboxGroupProps
  extends Omit<CheckboxPrimitiveGroupProps, 'children'> {
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function CheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: CheckboxGroupProps) {
  return (
    <CheckboxGroupPrimitive
      {...props}
      className={clsx('alinea-rac-CheckboxGroup', props.className)}
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

      {errorMessage && (
        <FieldError className="alinea-rac-FieldError">
          {typeof errorMessage === 'function'
            ? errorMessage({
                isInvalid: true,
                validationErrors: [],
                validationDetails: {
                  badInput: false,
                  customError: false,
                  patternMismatch: false,
                  rangeOverflow: false,
                  rangeUnderflow: false,
                  stepMismatch: false,
                  tooLong: false,
                  tooShort: false,
                  typeMismatch: false,
                  valid: false,
                  valueMissing: false
                }
              })
            : errorMessage}
        </FieldError>
      )}
    </CheckboxGroupPrimitive>
  )
}
