import type {
  TreeItemProps as TreeItemPrimitiveProps,
  TreeProps
} from 'react-aria-components'
import {
  ListLayout,
  TreeItemContent as TreeItemContentPrimitive,
  TreeItem as TreeItemPrimitive,
  Tree as TreePrimitive,
  Virtualizer
} from 'react-aria-components'
import './Tree.css'
import {type ComponentProps, useMemo} from 'react'
import {Button} from '../components/Button.tsx'
import {Checkbox} from '../components/Checkbox.tsx'

export const Tree = <T extends object>({className, ...props}: TreeProps<T>) => {
  const layout = useMemo(() => {
    return new ListLayout({
      rowHeight: 30
    })
  }, [])

  return (
    <Virtualizer layout={layout}>
      <TreePrimitive {...props}>{props.children}</TreePrimitive>
    </Virtualizer>
  )
}

export const TreeItem = <T extends object>({
  className,
  ...props
}: TreeItemPrimitiveProps<T>) => {
  return <TreeItemPrimitive {...props}>{props.children}</TreeItemPrimitive>
}

export const TreeItemContent = (
  props: ComponentProps<typeof TreeItemContentPrimitive>
) => {
  return (
    <TreeItemContentPrimitive {...props}>
      {props.children}
    </TreeItemContentPrimitive>
  )
}

export const TreeItemIndicator = () => {
  return <Button slot="chevron">indicator</Button>
}

export const TreeItemCheckbox = () => {
  return <Checkbox slot="selection" />
}

export const TreeItemLabel = (
  props: React.HtmlHTMLAttributes<HTMLSpanElement>
) => {
  return <span {...props} />
}
