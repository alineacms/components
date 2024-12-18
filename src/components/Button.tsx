import clsx from 'clsx'
import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps
} from 'react-aria-components'

import './Button.css'

export interface ButtonProps extends ButtonPrimitiveProps {
  appearance?: 'solid' | 'outline' | 'plain'
  intent?: 'primary' | 'secondary' | 'danger' | 'warning'
  size?: 'small' | 'medium' | 'large' | 'square-petite'
}

export function Button({intent, size, appearance, ...props}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-intent={intent}
      data-size={size}
      data-appearance={appearance}
      {...props}
      className={clsx('alinea-Button', props.className)}
    />
  )
}
