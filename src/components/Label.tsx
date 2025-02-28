import {
  Label as LabelPrimitive,
  type LabelProps as LabelPrimitiveProps
} from 'react-aria-components'

import './Label.css'
import type {ReactNode} from 'react'

interface LabelProps extends LabelPrimitiveProps {
  isRequired?: boolean
  label: ReactNode
  description?: ReactNode
  errorMessage?: ReactNode
  isDisabled?: boolean
  icon?: ReactNode
}

export function Label({
  label,
  description,
  errorMessage,
  isRequired,
  isDisabled,
  icon,
  ...props
}: LabelProps) {
  return (
    <>
    <div>
      <div className="alinea-rac-Label-header">
        <LabelPrimitive {...props} className="alinea-rac-Label-label">
          {label}
        </LabelPrimitive>
        <div className="alinea-rac-Label-description">{description}</div>
      </div>
      {props.children}
      <div className="alinea-rac-Label-error">{errorMessage}</div>
      </div>
    </>
  )
}
