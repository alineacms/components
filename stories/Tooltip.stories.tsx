import {Button, TooltipTrigger} from 'react-aria-components'
import {Tooltip} from '../src/components/Tooltip.tsx'
import {Stack} from './Stack.tsx'

export const Basic = () => (
  <div style={{paddingBlock: '80px'}}>
  <Stack align="center" gap={64}>
    <TooltipTrigger>
      <Button>💾</Button>
      <Tooltip>Save</Tooltip>
    </TooltipTrigger>

    <TooltipTrigger>
      <Button>❌</Button>
      <Tooltip>Delete</Tooltip>
    </TooltipTrigger>
  </Stack>
  </div>
)

export const Positions = () => (
  <div style={{paddingBlock: '80px'}}>
    <Stack align="center" gap={32}>
      <TooltipTrigger>
        <Button>Top</Button>
        <Tooltip placement="top">Tooltip on top</Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>Right</Button>
        <Tooltip placement="right">Tooltip on right</Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>Bottom</Button>
        <Tooltip placement="bottom">Tooltip on bottom</Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>Left</Button>
        <Tooltip placement="left">Tooltip on left</Tooltip>
      </TooltipTrigger>
    </Stack>
  </div>
)

export const DelayedTooltip = () => (
  <TooltipTrigger delay={500}>
    <Button>⏳</Button>
    <Tooltip>Tooltip appears after 500ms</Tooltip>
  </TooltipTrigger>
)

export const InteractiveTooltip = () => (
  <TooltipTrigger>
    <Button>🛠️ Hover for info</Button>
    <Tooltip>
      <Stack>
        <strong>Important Info</strong>
        <p>This tooltip contains multiple elements.</p>
      </Stack>
    </Tooltip>
  </TooltipTrigger>
)

export const DisabledButtonTooltip = () => (
  <TooltipTrigger>
    <Button isDisabled>🔒</Button>
    <Tooltip>Cannot perform this action</Tooltip>
  </TooltipTrigger>
)
