import type {CSSProperties, PropsWithChildren} from 'react'

type StackOptions = {
  /**
   * Shorthand for `alignItems` style prop
   * @type CSSProperties["alignItems"]
   */
  align?: CSSProperties['alignItems']
  /**
   * The direction to stack the items.
   * @default "column"
   * @type CSSProperties["flexDirection"]
   */
  direction?: CSSProperties['flexDirection']
  /**
   * The gap between the items.
   * @default "16"
   * @type CSSProperties["gap"]
   */
  gap?: CSSProperties['gap']
  /**
   * Shorthand for `justifyContent` style prop
   * @type CSSProperties["justifyContent"]
   */
  justify?: CSSProperties['justifyContent']
  /**
   * Shorthand for `flexWrap` style prop
   * @type CSSProperties["flexWrap"]
   */
  wrap?: CSSProperties['flexWrap']
}
type StackProps = PropsWithChildren & StackOptions

export const Stack = ({
  align = 'flex-start',
  direction = 'column',
  gap = 16,
  justify,
  wrap,
  ...props
}: StackProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: align,
      flexDirection: direction,
      gap: gap,
      justifyContent: justify,
      flexWrap: wrap
    }}
  >
    {props.children}
  </div>
)
