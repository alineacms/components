import clsx from 'clsx'
import {
  Button,
  TagGroup as TagGroupPrimitive,
  TagList,
  Tag as TagPrimitive
} from 'react-aria-components'
import type {
  TagGroupProps as TagGroupPrimitiveProps,
  TagListProps,
  TagProps
} from 'react-aria-components'
import {Label, type LabelSharedProps, labelProps} from './Label.tsx'
import './TagGroup.css'
import {IcRoundCancel} from '../icons/IcRoundCancel.tsx'
import {Icon} from './Icon.tsx'

export type IntentProps = 'primary' | 'secondary'
export type ShapeProps = 'square' | 'circle'

export interface TagGroupProps<T>
  extends Omit<TagGroupPrimitiveProps, 'children'>,
    Pick<TagListProps<T>, 'items' | 'children'>,
    LabelSharedProps {
  intent?: IntentProps
  shape?: ShapeProps
}

export function TagGroup<T extends object>({
  items,
  children,
  intent,
  shape,
  ...props
}: TagGroupProps<T>) {
  return (
    <TagGroupPrimitive
      data-intent={intent}
      data-shape={shape}
      {...props}
      className={clsx('alinea-rac-TagGroup', props.className)}
    >
      <Label {...labelProps(props)}>
        <TagList items={items} className="alinea-rac-TagGroup-list">
          {children}
        </TagList>
      </Label>
    </TagGroupPrimitive>
  )
}

export function Tag({children, ...props}: TagProps) {
  const textValue = typeof children === 'string' ? children : undefined
  return (
    <TagPrimitive
      textValue={textValue}
      {...props}
      className={clsx('alinea-rac-Tag', props.className)}
    >
      {({allowsRemoving}) => (
        <>
          {children}
          {allowsRemoving && (
            <Button slot="remove">
              <Icon icon={IcRoundCancel} />
            </Button>
          )}
        </>
      )}
    </TagPrimitive>
  )
}
