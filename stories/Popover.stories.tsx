import {Button, DialogTrigger, Heading} from 'react-aria-components'
import {Popover} from '../src/components/Popover.tsx'

export const Example = (args: any) => (
  <DialogTrigger>
    <Button aria-label="Help">ⓘ</Button>
    <Popover {...args}>
      <Heading slot="title">Help</Heading>
      <p>For help accessing your account, please contact support.</p>
    </Popover>
  </DialogTrigger>
)
