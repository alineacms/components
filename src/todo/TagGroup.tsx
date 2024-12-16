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
    <AriaTagGroup data-intent={intent} data-shape={shape} {...props}>
      <Label>{label}</Label>
      <TagList items={items} renderEmptyState={renderEmptyState}>
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
    <AriaTag textValue={textValue} {...props}>
      {({allowsRemoving}) => (
        <>
          {children}
          {allowsRemoving && <Button slot="remove">ⓧ</Button>}
        </>
      )}
    </AriaTag>
  )
}
