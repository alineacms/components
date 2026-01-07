import clsx from 'clsx'
import type {HTMLAttributes} from 'react'
import './Sidebar.css'

export interface SidebarProps extends HTMLAttributes<HTMLElement> {}

export function Sidebar(props: SidebarProps) {
  return (
    <aside
      {...props}
      className={clsx('alinea-rac-Sidebar', props.className)}
    />
  )
}

export interface SidebarHeaderProps extends HTMLAttributes<HTMLElement> {}

export function SidebarHeader(props: SidebarHeaderProps) {
  return (
    <header
      {...props}
      className={clsx('alinea-rac-SidebarHeader', props.className)}
    />
  )
}

export interface SidebarSectionProps extends HTMLAttributes<HTMLElement> {}

export function SidebarSection(props: SidebarSectionProps) {
  return (
    <section
      {...props}
      className={clsx('alinea-rac-SidebarSection', props.className)}
    />
  )
}

export interface SidebarFooterProps extends HTMLAttributes<HTMLElement> {}

export function SidebarFooter(props: SidebarFooterProps) {
  return (
    <footer
      {...props}
      className={clsx('alinea-rac-SidebarFooter', props.className)}
    />
  )
}

export interface SidebarRowProps extends HTMLAttributes<HTMLDivElement> {}

export function SidebarRow(props: SidebarRowProps) {
  return (
    <div
      {...props}
      className={clsx('alinea-rac-SidebarRow', props.className)}
    />
  )
}

export interface SidebarTitleProps extends HTMLAttributes<HTMLDivElement> {}

export function SidebarTitle(props: SidebarTitleProps) {
  return (
    <div
      {...props}
      className={clsx('alinea-rac-SidebarTitle', props.className)}
    />
  )
}

export interface SidebarCaptionProps extends HTMLAttributes<HTMLDivElement> {}

export function SidebarCaption(props: SidebarCaptionProps) {
  return (
    <div
      {...props}
      className={clsx('alinea-rac-SidebarCaption', props.className)}
    />
  )
}
