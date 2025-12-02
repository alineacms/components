import clsx from 'clsx'
import {
  Button,
  Input,
  NumberField as NumberFieldPrimitive,
  type NumberFieldProps as NumberFieldPrimitiveProps,
  Group
} from 'react-aria-components'
import {IcRoundKeyboardArrowDown} from '../stories/icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowUp} from '../stories/icons/IcRoundKeyboardArrowUp.tsx'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './NumberField.css'

export interface NumberFieldProps
  extends Omit<NumberFieldPrimitiveProps, 'children'>,
    LabelSharedProps {
  steppers?: boolean
}

export function NumberField({steppers = true, ...props}: NumberFieldProps) {
  return (
    <NumberFieldPrimitive
      {...props}
      className="alinea-rac-NumberField"
      data-invalid={props.errorMessage ? true : undefined}
    >
      <Label {...labelProps(props)}>
        <Group
          className={clsx('alinea-rac-NumberField-wrapper')}
          data-invalid={props.errorMessage ? true : undefined}
          data-steppers={steppers}
        >
          <Input className="alinea-rac-NumberField-input" />
          {steppers && (
            <div className="alinea-rac-NumberField-buttons">
              <Button
                className="alinea-rac-NumberField-button"
                data-slot="increment"
                slot="increment"
              >
                <IcRoundKeyboardArrowUp />
              </Button>
              <Button
                className="alinea-rac-NumberField-button"
                data-slot="decrement"
                slot="decrement"
              >
                <IcRoundKeyboardArrowDown />
              </Button>
            </div>
          )}
        </Group>
      </Label>
    </NumberFieldPrimitive>
  )
}
