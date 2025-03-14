import {
  OverlayArrow,
  Tooltip as TooltipPrimitive,
  type TooltipProps as TooltipPrimitiveProps
} from 'react-aria-components'

import './Tooltip.css'

export interface TooltipProps
  extends Omit<TooltipPrimitiveProps, 'children'> {
  children: React.ReactNode
}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive {...props} className="alinea-rac-Tooltip">
      <OverlayArrow className="alinea-rac-Tooltip-arrow">
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </TooltipPrimitive>
  )
}
