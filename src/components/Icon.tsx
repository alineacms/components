import clsx from 'clsx'
import {
  type ComponentType,
  type ReactNode,
  type SVGProps,
  cloneElement
} from 'react'
import './Icon.css'

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: ComponentType | ReactNode
  'aria-label'?: string
  'aria-hidden'?: boolean | 'false' | 'true'
}

export function Icon({
  icon: IconView,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) {
  const view = typeof IconView === 'function' ? <IconView /> : <>{IconView}</>
  return cloneElement(view, {
    focusable: 'false',
    'aria-label': ariaLabel,
    'aria-hidden': ariaLabel ? ariaHidden || undefined : true,
    role: 'img',
    className: clsx('alinea-rac-Icon', props.className)
  })
}
