import clsx from 'clsx'
import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps
} from 'react-aria-components'
import './Button.css'
import type {ComponentType, ReactNode} from 'react'
import {Icon} from './Icon.tsx'
import {ProgressCircle} from './ProgressCircle.tsx'

export interface ButtonProps extends ButtonPrimitiveProps {
  appearance?: 'outline' | 'plain'
  intent?: 'primary' | 'secondary' | 'danger' | 'warning'
  size?: 'small' | 'large' | 'square-petite' | 'icon'
  icon?: ComponentType
  children?: ReactNode
}

export function Button({
  appearance,
  intent,
  size,
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-appearance={appearance}
      data-intent={intent}
      data-size={size}
      {...props}
      className={clsx('alinea-rac-Button', props.className)}
    >
      {props.isPending ? (
        <ProgressCircle isIndeterminate aria-label="Pending..." />
      ) : (
        icon && <Icon icon={icon} data-slot="icon" />
      )}
      {children}
    </ButtonPrimitive>
  )
}
