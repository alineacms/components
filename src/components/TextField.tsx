import clsx from 'clsx'
import {
  Input,
  TextArea,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps
} from 'react-aria-components'
import {Label, type LabelSharedProps, labelProps} from '../components/Label.tsx'
import './TextField.css'

export interface TextFieldProps
  extends LabelSharedProps,
    TextFieldPrimitiveProps {
  multiline?: boolean
  placeholder?: string
  className?: string
}

export function TextField({multiline, className, ...props}: TextFieldProps) {
  const hasValue =
    (props.value ?? props.placeholder ?? props.defaultValue) !== undefined
  if (multiline && !hasValue)
    throw new Error('Multiline TextField requires a value or defaultValue')
  return (
    <TextFieldPrimitive {...props}>
      <Label {...labelProps(props)}>
        <div className={clsx('alinea-rac-TextField', className)}>
          {multiline ? (
            <div className="alinea-rac-TextField-multiline">
              <TextArea
                className="alinea-rac-TextField-multiline-area"
                rows={1}
              />
              <div
                aria-hidden="true"
                className="alinea-rac-TextField-multiline-shadow"
              >
                {props.value || props.placeholder}{' '}
              </div>
            </div>
          ) : (
            <Input className="alinea-rac-TextField-input" />
          )}
        </div>
      </Label>
    </TextFieldPrimitive>
  )
}
