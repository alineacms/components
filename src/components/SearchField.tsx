import clsx from 'clsx'
import type {SVGProps} from 'react'
import {
  FieldError,
  Input,
  Label,
  SearchField as SearchFieldPrimitive,
  type SearchFieldProps as SearchFieldPrimitiveProps,
  Text,
  type ValidationResult
} from 'react-aria-components'

import './SearchField.css'
import {Button} from './Button.tsx'

export interface SearchFieldProps extends SearchFieldPrimitiveProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  isPending?: boolean
}

export function SearchField({
  label,
  placeholder,
  description,
  errorMessage,
  ...props
}: SearchFieldProps) {
  return (
    <SearchFieldPrimitive
      {...props}
      className={clsx('alinea-rac-SearchField', props.className)}
    >
      {label && <Label className="alinea-rac-Label">{label}</Label>}
      <div className="alinea-rac-FieldGroup">
        <Input
          placeholder={placeholder || 'Search...'}
          className="alinea-rac-Input"
        />
        <Button
          size="square-petite"
          appearance="plain"
          className="alinea-rac-Clear"
        >
          <IcRoundCancel />
        </Button>
      </div>
      {description && <Text slot="description">{description}</Text>}
      <FieldError className="alinea-rac-FieldError">{errorMessage}</FieldError>
    </SearchFieldPrimitive>
  )
}

function IcRoundCancel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41L9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12L7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41"
      />
    </svg>
  )
}
