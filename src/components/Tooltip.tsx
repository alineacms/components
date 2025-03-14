import {
  OverlayArrow,
  Tooltip as TooltipPrimitive,
  type TooltipProps as TooltipPrimitiveProps,
  TooltipTrigger
} from 'react-aria-components'
import './Tooltip.css'
import type {TooltipTriggerProps} from '@react-types/tooltip'
import type {ReactNode} from 'react'

export interface TooltipProps
  extends TooltipPrimitiveProps,
    TooltipTriggerProps {
  children: ReactNode
  tooltip: ReactNode
}

export function Tooltip({tooltip, children, ...props}: TooltipProps) {
  return (
    <TooltipTrigger {...props}>
      {children}
      <TooltipPrimitive {...props} className="alinea-rac-Tooltip">
        <OverlayArrow className="alinea-rac-Tooltip-arrow">
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
        {tooltip}
      </TooltipPrimitive>
    </TooltipTrigger>
  )
}
