import clsx from 'clsx';
import {
  Input,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps
} from 'react-aria-components';

import { useLabelContext } from '../components/Label.tsx';
import './TextField.css';

export interface TextFieldProps extends TextFieldPrimitiveProps {
  label?: React.ReactNode;
  placeholder?: string;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  children?: React.ReactNode;
}

export function TextField({
  placeholder,
  icon,
  isDisabled,
  isReadOnly,
  children,
  ...props
}: TextFieldProps) {
  const { errorMessage } = useLabelContext();
  const hasError = !!errorMessage;

  return (
    <TextFieldPrimitive
      {...props}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isInvalid={hasError || undefined}
      className={clsx('alinea-rac-TextField', props.className, { 'alinea-rac-TextField-error': hasError })}
    >
      <Input 
        className={clsx('alinea-rac-Input')}
        placeholder={placeholder}
        tabIndex={isReadOnly ? -1 : undefined}
      />
    </TextFieldPrimitive>
  );
}
