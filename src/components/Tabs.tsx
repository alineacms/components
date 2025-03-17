import {
  TabList as TabListPrimitive,
  type TabListProps,
  TabPanel as TabPanelPrimitive,
  type TabPanelProps,
  Tab as TabPrimitive,
  type TabProps,
  Tabs as TabsPrimitive
} from 'react-aria-components'
import type {TabsProps as TabsPrimitiveProps} from 'react-aria-components'
import './Tabs.css'
import clsx from 'clsx'

export type {TabProps, TabListProps, TabPanelProps} from 'react-aria-components'

export interface TabsProps extends TabsPrimitiveProps {
  variant?: 'line' | 'subtle' | 'enclosed'
  overflow?: boolean
}

export function Tabs({variant = 'line', overflow, ...props}: TabsProps) {
  return (
    <TabsPrimitive
      data-variant={variant}
      data-overflow={overflow}
      {...props}
      className={clsx('alinea-rac-Tabs', props.className)}
    />
  )
}

export function Tab(props: TabProps) {
  return (
    <TabPrimitive
      {...props}
      className={clsx('alinea-rac-Tabs-field', props.className)}
    />
  )
}

export function TabList<T extends object>(
  props: TabListProps<T> & { overflow?: boolean }
) {
  return (
    <div
      className={clsx('alinea-rac-Tabs-container', {
        'alinea-rac-TabListOverflow': props.overflow
      })}
    >
      <TabListPrimitive<T>
        {...props}
        className={clsx('alinea-rac-Tablist', props.className)}
      />
    </div>
  )
}

export function TabPanel(props: TabPanelProps) {
  return (
    <TabPanelPrimitive
      {...props}
      className={clsx('alinea-rac-TabPanel', props.className)}
    />
  )
}
