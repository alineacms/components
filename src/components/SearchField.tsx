import clsx from 'clsx'
import {
  Button,
  Input,
  SearchField as SearchFieldPrimitive,
  type SearchFieldProps as SearchFieldPrimitiveProps
} from 'react-aria-components'
import './SearchField.css'
import {IcRoundClose} from '../stories/icons/IcRoundClose.tsx'
import {IcRoundSearch} from '../stories/icons/IcRoundSearch.tsx'
import {Icon} from './Icon.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import {ProgressCircle} from './ProgressCircle.tsx'

export interface SearchFieldProps
  extends SearchFieldPrimitiveProps,
    LabelSharedProps {
  placeholder?: string
  hasIcon?: boolean
  isPending?: boolean
}

export function SearchField({hasIcon, isPending, ...props}: SearchFieldProps) {
  return (
    <SearchFieldPrimitive
      {...props}
      className={clsx('alinea-rac-SearchField', props.className)}
    >
      <Label {...labelProps(props)}>
        <div className="alinea-rac-SearchField-field">
          {hasIcon && !isPending && (
            <Icon
              icon={IcRoundSearch}
              className="alinea-rac-SearchField-field-icon"
            />
          )}
          {hasIcon && isPending && (
            <ProgressCircle
              isIndeterminate
              aria-label="Refreshing..."
              className="alinea-rac-SearchField-field-pending"
            />
          )}
          <Input className="alinea-rac-SearchField-field-input" />
          <Button className="alinea-rac-SearchField-field-clear">
            <Icon
              icon={IcRoundClose}
              className="alinea-rac-SearchField-field-clear-icon"
            />
          </Button>
        </div>
      </Label>
    </SearchFieldPrimitive>
  )
}
