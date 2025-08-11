import clsx from 'clsx'
import {Form as FormPrimitive, type FormProps} from 'react-aria-components'

import './Form.css'

export function Form(props: FormProps) {
  return (
    <FormPrimitive
      {...props}
      className={clsx('alinea-rac-Form', props.className)}
    />
  )
}
