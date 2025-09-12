import clsx from 'clsx'
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

export {DialogTrigger} from 'react-aria-components'
