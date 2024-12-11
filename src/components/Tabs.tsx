import {Tabs as RACTabs} from 'react-aria-components'
import type {TabsProps as RACTabsProps} from 'react-aria-components'
import './Tabs.css'

export interface TabsProps extends RACTabsProps {
  variant?: 'line' | 'subtle' | 'enclosed'
}

export function Tabs({variant, ...props}: TabsProps) {
  return <RACTabs data-variant={variant} {...props} />
}
