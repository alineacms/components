import clsx from 'clsx'
import type {HTMLAttributes, PropsWithChildren} from 'react'
import {
  Dialog as DialogPrimitive,
  type DialogProps
} from 'react-aria-components'

import './Dialog.css'

export function Dialog(props: DialogProps) {
  return (
    <DialogPrimitive
      {...props}
      className={clsx('alinea-rac-Dialog', props.className)}
    />
  )
}

export function DialogFooter(
  props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>
) {
  return <div {...props} className="alinea-rac-DialogFooter" />
}

export {DialogTrigger} from 'react-aria-components'
