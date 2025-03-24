import {
  MenuContext,
  type MenuItemProps,
  type MenuProps as MenuPrimitiveProps,
  MenuTrigger,
  Header as PrimitiveHeader,
  Menu as PrimitiveMenu,
  MenuItem as PrimitiveMenuItem,
  Separator as PrimitiveSeparator,
  SubmenuTrigger
} from 'react-aria-components'

import './Menu.css'
import {type ReactNode, useContext} from 'react'
import {IcRoundKeyboardArrowRight} from '../icons/IcRoundKeyboardArrowRight.tsx'
import {Button} from './Button.tsx'
import {Icon} from './Icon.tsx'
import {Popover} from './Popover.tsx'

export function MenuItem(props: MenuItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined)

  return (
    <PrimitiveMenuItem
      {...props}
      className="alinea-rac-MenuItem"
      textValue={textValue}
    >
      {({hasSubmenu}) => (
        <>
          {props.children}
          {hasSubmenu && (
            <Icon
              className="alinea-rac-MenuItem-icon"
              icon={IcRoundKeyboardArrowRight}
            />
          )}
        </>
      )}
    </PrimitiveMenuItem>
  )
}

export function MenuHeader(
  props: React.ComponentProps<typeof PrimitiveHeader>
) {
  return <PrimitiveHeader {...props} className="alinea-rac-MenuHeader" />
}

export function MenuSeparator() {
  return <PrimitiveSeparator className="alinea-rac-MenuSeparator" />
}

export interface MenuProps<T> extends MenuPrimitiveProps<T> {
  label: ReactNode
  children: ReactNode
}

export function Menu<T extends object>({
  label,
  children,
  ...props
}: MenuProps<T>) {
  const isInMenu = useContext(MenuContext)
  const Trigger = isInMenu ? SubmenuTrigger : MenuTrigger
  return (
    <Trigger>
      {typeof label === 'string' ? <Button>{label}</Button> : <>{label}</>}
      <Popover>
        <PrimitiveMenu {...props}>{children}</PrimitiveMenu>
      </Popover>
    </Trigger>
  )
}
