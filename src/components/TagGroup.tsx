import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  type TagGroupProps as AriaTagGroupProps,
  Button,
  Label,
  TagList,
  type TagListProps,
  type TagProps,
  Text
} from 'react-aria-components'
import './TagGroup.css'
import clsx from 'clsx'
import type {SVGProps} from 'react'

export type IntentProps = 'primary' | 'secondary'
export type ShapeProps = 'square' | 'circle'

export interface TagGroupProps<T>
  extends Omit<AriaTagGroupProps, 'children'>,
    Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> {
  label?: string
  description?: string
  errorMessage?: string
  intent?: 'primary' | 'secondary'
  shape?: ShapeProps
}

export function TagGroup<T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  intent,
  shape,
  ...props
}: TagGroupProps<T>) {
  return (
    <AriaTagGroup
      data-intent={intent}
      data-shape={shape}
      {...props}
      className={clsx('alinea-TagGroup', props.className)}
    >
      <Label>{label}</Label>
      <TagList
        items={items}
        renderEmptyState={renderEmptyState}
        className={clsx('alinea-TagList')}
      >
        {children}
      </TagList>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </AriaTagGroup>
  )
}

export function Tag({children, ...props}: TagProps) {
  const textValue = typeof children === 'string' ? children : undefined
  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={clsx('alinea-Tag', props.className)}
    >
      {args => {
        const inner = typeof children === 'function' ? children(args) : children
        return (
          <>
            {inner}
            {args.allowsRemoving && (
              <Button slot="remove">
                <IcRoundCancel style={{display: 'block'}} />
              </Button>
            )}
          </>
        )
      }}
    </AriaTag>
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
