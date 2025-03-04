import clsx from 'clsx';
import {
  TextArea as TextAreaPrimitive,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps
} from 'react-aria-components';

import { useRef, useEffect } from 'react';
import { useLabelContext } from '../components/Label.tsx'; // ✅ Context importeren
import './TextField.css';

export interface TextAreaProps extends TextFieldPrimitiveProps {
  placeholder?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  autoSize?: boolean; // ✅ Nieuw: activeert auto-resize functionaliteit
}

export function TextArea({
  placeholder,
  isDisabled,
  isReadOnly,
  autoSize = true, // ✅ Standaard auto-resize aan
  ...props
}: TextAreaProps) {
  const { errorMessage } = useLabelContext(); // ✅ Haal de errorMessage uit context
  const hasError = !!errorMessage;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  // ✅ Functie om de grootte aan te passen
  useEffect(() => {
    if (autoSize && textAreaRef.current && shadowRef.current) {
      shadowRef.current.textContent = `${textAreaRef.current.value} `; // Voeg spatie toe om correcte hoogte te krijgen
      textAreaRef.current.style.height = `${shadowRef.current.offsetHeight}px`;
    }
  });

  return (
    <TextFieldPrimitive
      {...props}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isInvalid={hasError || undefined} // ✅ Error aangeven in component
      className={clsx('alinea-rac-TextField', props.className, { 'alinea-rac-TextField-error': hasError })}
    >
      <div className="alinea-rac-TextArea-container">
        {/* ✅ Zichtbare TextArea */}
        <TextAreaPrimitive
          ref={textAreaRef}
          className={clsx('alinea-rac-TextArea', { 'alinea-rac-TextArea-error': hasError })}
          placeholder={placeholder}
          rows={2}
          tabIndex={isReadOnly ? -1 : undefined}
          onInput={() => {
            if (autoSize && textAreaRef.current && shadowRef.current) {
              shadowRef.current.textContent = `${textAreaRef.current.value} `;
              textAreaRef.current.style.height = `${shadowRef.current.offsetHeight}px`;
            }
          }}
        />
        {autoSize && (
          <div
            ref={shadowRef}
            aria-hidden="true"
            className="alinea-rac-TextArea-shadow"
          />
        )}
      </div>
    </TextFieldPrimitive>
  );
}
