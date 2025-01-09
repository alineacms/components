import clsx from 'clsx'
import {
  Label as LabelPrimitive,
  type LabelProps as LabelPrimitiveProps
} from 'react-aria-components'

import './Label.css'

interface LabelProps extends LabelPrimitiveProps {
  isRequired?: boolean
}

export function Label({isRequired, ...props}: LabelProps) {
  if (!props.children) return null
  return (
    <LabelPrimitive {...props} className={clsx('alinea-rac-Label')}>
      {props.children + (isRequired ? ' *' : '')}
    </LabelPrimitive>
  )
}
