import clsx from 'clsx'
import "./Toolbar.css"
import type {
  GroupProps,
  SeparatorProps,
  ToggleButtonProps,
  ToolbarProps as ToolbarPrimitiveProps
} from 'react-aria-components'
import {
  Group,
  Separator,
  ToggleButton,
  Toolbar as ToolbarPrimitive
} from 'react-aria-components'

export interface ToolbarProps extends Omit<ToolbarPrimitiveProps, 'children'> {
  children: React.ReactNode
}

export function Toolbar({className, ...props}: ToolbarProps) {
  return (
    <ToolbarPrimitive
      {...props}
      className={clsx('alinea-rac-Toolbar', className)}
    />
  )
}

export function ToolbarGroup({isDisabled, className, ...props}: GroupProps) {
  return (
    <Group className="alinea-rac-ToolbarGroup" {...props}>
      {props.children}
    </Group>
  )
}

export function ToolbarButton({...props}: ToggleButtonProps) {
  return <ToggleButton className="alinea-rac-ToolbarButton" {...props} />
}

export function ToolbarSeparator(props: SeparatorProps) {
  return <Separator className="alinea-rac-ToolbarSeparator" />
}
