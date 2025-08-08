import clsx from 'clsx'
import {ProgressBar, type ProgressBarProps} from 'react-aria-components'

import './ProgressCircle.css'

interface ProgressCircleProps extends Omit<ProgressBarProps, 'className'> {
  className?: string
}

export function ProgressCircle({className, ...props}: ProgressCircleProps) {
  const c = '50%'
  const r = 'calc(50% - 2px)'
  return (
    <ProgressBar
      {...props}
      className={clsx('alinea-rac-ProgressCircle', className)}
    >
      {({percentage, isIndeterminate}) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          data-slot="icon"
          className="alinea-rac-ProgressCircle-icon"
        >
          <circle
            cx={c}
            cy={c}
            r={r}
            strokeWidth={3}
            stroke="currentColor"
            strokeOpacity={0.25}
          />
          {!isIndeterminate ? (
            <circle
              cx={c}
              cy={c}
              r={r}
              strokeWidth={3}
              stroke="currentColor"
              pathLength={100}
              strokeDasharray="100 200"
              strokeDashoffset={100 - (percentage ?? 0)}
              strokeLinecap="round"
              transform="rotate(-90)"
              className="alinea-rac-ProgressCircle-icon-circle"
            />
          ) : (
            <circle
              cx={c}
              cy={c}
              r={r}
              strokeWidth={3}
              stroke="currentColor"
              pathLength={100}
              strokeDasharray="100 200"
              strokeDashoffset={100 - 30}
              strokeLinecap="round"
              className="alinea-rac-ProgressCircle-icon-circle"
              data-indeterminate
            />
          )}
        </svg>
      )}
    </ProgressBar>
  )
}
