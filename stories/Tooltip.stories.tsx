import {Button, TooltipTrigger} from 'react-aria-components'
import {Tooltip} from '../src/todo/Tooltip.tsx'

export const Example = (args: any) => (
  <TooltipTrigger>
    <Button>💾</Button>
    <Tooltip {...args}>Save</Tooltip>
  </TooltipTrigger>
)
