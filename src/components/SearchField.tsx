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
  return (
    <Label {...labelProps(props)}>
      <SearchFieldPrimitive
        {...props}
        className={clsx('alinea-rac-SearchField', props.className)}
        data-invalid={props.isInvalid}
        data-disabled={props.isDisabled}
        data-readonly={props.isReadOnly}
      >
        <Input
          className="alinea-rac-SearchField-input"
          aria-labelledby={props.id}
        />
        <Button className="alinea-rac-SearchField-clear">
          <IcRoundCancel />
        </Button>
      </SearchFieldPrimitive>
    </Label>
  )
}
