import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps
} from 'react-aria-components'
import './Button.css'

export interface ButtonProps extends ButtonPrimitiveProps {
  intent?: 'primary' | 'secondary' | 'danger' | 'warning'
  size?: 'medium' | 'large' | 'square' | 'extra-small' | 'small'
  shape?: 'circle' | 'plain' | 'default'
  appearance?: 'solid' | 'outline' | 'plain'
}

export function Button({intent, size, appearance, ...props}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-intent={intent}
      data-size={size}
      data-appearance={appearance}
      {...props}
    />
  )
}
