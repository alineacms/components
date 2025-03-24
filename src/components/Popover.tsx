import {
  type PopoverProps as AriaPopoverProps,
  Popover as PopoverPrimitive
} from 'react-aria-components'

import './Popover.css'

export interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
  children: React.ReactNode
}

export function Popover({children, ...props}: PopoverProps) {
  return (
    <PopoverPrimitive className={'alinea-rac-Popover'} {...props}>
      {children}
    </PopoverPrimitive>
  )
}
