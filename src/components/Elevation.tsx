import clsx from 'clsx'
import type {HTMLAttributes} from 'react'
import './Elevation.css'

export interface ElevationProps extends HTMLAttributes<HTMLDivElement> {}

export function Elevation(props: ElevationProps) {
  return (
    <div
      {...props}
      className={clsx('alinea-rac-Elevation', props.className)}
    />
  )
}

export interface ElevationHeaderProps extends HTMLAttributes<HTMLElement> {}

export function ElevationHeader(props: ElevationHeaderProps) {
  return (
    <header
      {...props}
      className={clsx('alinea-rac-ElevationHeader', props.className)}
    />
  )
}
