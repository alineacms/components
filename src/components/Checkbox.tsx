import clsx from 'clsx'
import {
  Checkbox as CheckboxPrimitive,
  type CheckboxProps as CheckboxPrimitiveProps
} from 'react-aria-components'
import './Checkbox.css'

export type {CheckboxProps} from 'react-aria-components'

interface CheckboxProps extends CheckboxPrimitiveProps {
  label?: string
  description?: string
}

export function Checkbox({
  label,
  description,
  children,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive
      {...props}
      className={clsx('alinea-rac-Checkbox', props.className)}
    >
      {({isIndeterminate}) => (
        <>
          <div className="alinea-rac-Checkbox-box">
            <svg
              className="alinea-rac-Checkbox-mark"
              viewBox="0 0 18 18"
              aria-hidden="true"
            >
              {isIndeterminate ? (
                <rect x={1} y={7.5} width={15} height={3} />
              ) : (
                <polyline points="1 9 7 14 15 4" />
              )}
            </svg>
          </div>
          {label || children}
          {description && (
            <div className="alinea-rac-Label-description">{description}</div>
          )}
        </>
      )}
    </CheckboxPrimitive>
  )
}
