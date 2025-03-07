import clsx from 'clsx'
import {
  TextArea as TextAreaPrimitive,
  type TextAreaProps as TextAreaPrimitiveProps
} from 'react-aria-components'
import {Label, type LabelProps} from './Label.tsx'
import './TextArea.css'

export interface TextAreaProps extends Omit<LabelProps, 'children'> {
  autoSize?: boolean
  placeholder?: string
  isDisabled?: boolean
  isReadOnly?: boolean
  value?: string
  className?: string
}

export function TextArea({
  autoSize = true,
  label,
  description,
  errorMessage,
  isDisabled,
  isReadOnly,
  placeholder,
  icon,
  ...props
}: TextAreaProps) {
  return (
    <Label
      label={label}
      description={description}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      icon={icon}
    >
      <div className="alinea-rac-TextArea">
        <TextAreaPrimitive
          {...(props as Omit<TextAreaPrimitiveProps, 'children'>)}
          disabled={isDisabled}
          readOnly={isReadOnly}
          className={clsx('alinea-rac-TextArea-input', props.className, {
            'alinea-rac-TextArea-error': errorMessage
          })}
          placeholder={placeholder}
          rows={2}
        />
        <div aria-hidden="true" className={'alinea-rac-TextArea-shadow'}>
          {`${props.value || placeholder} + ' '`}
        </div>
      </div>
    </Label>
  )
}
