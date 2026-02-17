import clsx from 'clsx'
import type {HTMLAttributes} from 'react'
import './Sidebar.css'

export interface SidebarProps extends HTMLAttributes<HTMLElement> {}

export function Sidebar({className, ...props}: SidebarProps) {
  return <aside {...props} className={clsx('alinea-rac-Sidebar', className)} />
}

export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function SidebarHeader({className, ...props}: SidebarHeaderProps) {
  return (
    <div {...props} className={clsx('alinea-rac-SidebarHeader', className)} />
  )
}

export interface SidebarBodyProps extends HTMLAttributes<HTMLDivElement> {}

export function SidebarBody({className, ...props}: SidebarBodyProps) {
  return (
    <div {...props} className={clsx('alinea-rac-SidebarBody', className)} />
  )
}

export interface SidebarFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function SidebarFooter({className, ...props}: SidebarFooterProps) {
  return (
    <div {...props} className={clsx('alinea-rac-SidebarFooter', className)} />
  )
}
