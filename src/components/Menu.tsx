import {
  MenuItem as AriaMenuItem,
  Menu,
  type MenuItemProps,
  type MenuProps,
  MenuTrigger,
  type MenuTriggerProps
} from 'react-aria-components'

import './Menu.css'
import {IcRoundKeyboardArrowDown} from '../icons/IcRoundKeyboardArrowDown.tsx'
import {Popover} from '../todo/Popover.tsx'
import {Button} from './Button.tsx'
import {Icon} from './Icon.tsx'

export interface MenuButtonProps<T>
  extends MenuProps<T>,
    Omit<MenuTriggerProps, 'children'> {
  label?: string
}

export function MenuButton<T extends object>({
  label,
  children,
  ...props
}: MenuButtonProps<T>) {
  return (
    <MenuTrigger {...props}>
      <Button size="square-petite">
        {' '}
        <Icon icon={IcRoundKeyboardArrowDown} />
      </Button>
      <Popover>
        <Menu {...props}>{children}</Menu>
      </Popover>
    </MenuTrigger>
  )
}

export function MenuItem(props: MenuItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined)
  return (
    <AriaMenuItem
      className="alinea-rac-MenuItem"
      {...props}
      textValue={textValue}
    >
      {({hasSubmenu}) => (
        <>
          {props.children}
          {hasSubmenu && (
            <svg className="chevron" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </>
      )}
    </AriaMenuItem>
  )
}
