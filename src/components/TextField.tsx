import clsx from 'clsx'
import {
  Input,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps
} from 'react-aria-components'

import {Label, type LabelProps} from '../components/Label.tsx'
import './TextField.css'

export interface TextFieldProps extends Omit<LabelProps, 'children'> {
  placeholder?: string
  isDisabled?: boolean
  isReadOnly?: boolean
  defaultValue?: string
  className?: string
}

export function TextField({
  label,
  description,
  errorMessage,
  icon,
  isDisabled,
  isReadOnly,
  placeholder,
  ...props
}: TextFieldProps) {
  return (
    <Label
      label={label}
      description={description}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      icon={icon}
    >
      <TextFieldPrimitive
        {...(props as TextFieldPrimitiveProps)}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        className={clsx('alinea-rac-TextField', props.className)}
      >
        <Input
          className="alinea-rac-TextField-input"
          placeholder={placeholder}
          tabIndex={isReadOnly ? -1 : undefined}
        />
      </TextFieldPrimitive>
    </Label>
  )
}
