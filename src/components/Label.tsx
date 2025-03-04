import {
  Label as LabelPrimitive,
  type LabelProps as LabelPrimitiveProps
} from 'react-aria-components';

import './Label.css';
import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

const LabelContext = createContext<{ errorMessage?: ReactNode }>({});

interface LabelProps extends LabelPrimitiveProps {
  isRequired?: boolean;
  label: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  isDisabled?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

export function Label({
  label,
  description,
  errorMessage,
  isRequired,
  isDisabled,
  icon,
  children,
  ...props
}: LabelProps) {
  return (
    <LabelContext.Provider value={{ errorMessage }}>
      <div className="alinea-rac-Label-container">
        <div className="alinea-rac-Label-header">
          <div className="alinea-rac-Label-title">
            {icon && <span className="alinea-rac-Label-icon">{icon}</span>}
            <LabelPrimitive {...props} className="alinea-rac-Label-label">
              {label}
            </LabelPrimitive>
          </div>
          {description && <div className="alinea-rac-Label-description">{description}</div>}
        </div>
        {children}
        {errorMessage && <div className="alinea-rac-Label-error">{errorMessage}</div>}
      </div>
    </LabelContext.Provider>
  );
}

export function useLabelContext() {
  return useContext(LabelContext);
}
