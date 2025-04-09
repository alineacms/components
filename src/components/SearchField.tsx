import clsx from 'clsx'
import {
  Button,
  Input,
  SearchField as SearchFieldPrimitive,
  type SearchFieldProps as SearchFieldPrimitiveProps
} from 'react-aria-components'
import './SearchField.css'
import {IcRoundCancel} from '../icons/IcRoundCancel.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'

export interface SearchFieldProps
  extends SearchFieldPrimitiveProps,
    LabelSharedProps {
  placeholder?: string
}

export function SearchField(props: SearchFieldProps) {
  const ariaLabel =
    props['aria-label'] || (!props.label ? props.placeholder : undefined)

  return (
    <SearchFieldPrimitive
      {...props}
      className={clsx('alinea-rac-SearchField', props.className)}
      aria-label={ariaLabel}
    >
      <Label {...labelProps(props)} />
      <div className="alinea-rac-SearchField-field">
        <Input
          className="alinea-rac-SearchField-field-input"
          aria-labelledby={props.id}
        />
        <Button className="alinea-rac-SearchField-field-clear">
          <IcRoundCancel />
        </Button>
      </div>
    </SearchFieldPrimitive>
  )
}
