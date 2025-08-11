import clsx from 'clsx'
import {
  FieldError,
  Label as LabelPrimitive,
  type LabelProps as LabelPrimitiveProps,
  type ValidationResult
} from 'react-aria-components'
import './Label.css'
import type {ReactNode} from 'react'

export interface LabelSharedProps {
  label?: ReactNode
  description?: ReactNode
  errorMessage?: ReactNode | ((validation: ValidationResult) => ReactNode)
  isRequired?: boolean
  isDisabled?: boolean
  icon?: ReactNode
  id?: string
}

export interface LabelProps extends LabelSharedProps, LabelPrimitiveProps {}

export function Label({
  label,
  description,
  errorMessage,
  isRequired,
  icon,
  children,
  ...props
}: LabelProps) {
  const hasLabel = label || isRequired
  const hasTitle = hasLabel || icon
  const hasHeader = hasTitle || description

  if (!hasHeader && !errorMessage && !children) return null

  return (
    <div className={clsx('alinea-rac-Label', props.className)}>
      {hasHeader && (
        <header className="alinea-rac-Label-header">
          {hasTitle && (
            <div className="alinea-rac-Label-title">
              {icon && <span className="alinea-rac-Label-icon">{icon}</span>}
              {hasLabel && (
                <LabelPrimitive {...props} className="alinea-rac-Label-label">
                  {label}
                  {isRequired && (
                    <span className="alinea-rac-Label-required"> *</span>
                  )}
                </LabelPrimitive>
              )}
            </div>
          )}
          {description && (
            <div className="alinea-rac-Label-description">{description}</div>
          )}
        </header>
      )}
      {children}
      {errorMessage && (
        <FieldError className="alinea-rac-Label-error">
          {errorMessage}
        </FieldError>
      )}
    </div>
  )
}

export function labelProps<T extends LabelSharedProps>({
  label,
  description,
  errorMessage,
  isRequired,
  icon
}: T): LabelProps {
  return {
    label,
    description,
    errorMessage,
    isRequired,
    icon
  }
}
