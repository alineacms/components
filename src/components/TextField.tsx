import {
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
  FieldError,
  Input,
  Label,
  Text,
  TextArea,
  type ValidationResult
} from 'react-aria-components'

import './TextField.css'

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  isTextarea?: boolean
}

export function TextField({
  label,
  description,
  errorMessage,
  isTextarea,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField {...props}>
      <Label>{label + (props.isRequired ? ' *' : '')}</Label>
      {isTextarea ? <TextArea /> : <Input />}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  )
}
