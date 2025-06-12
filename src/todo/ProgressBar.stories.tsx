import {ProgressBar} from './ProgressBar.tsx'

export const Example = (args: any) => <ProgressBar {...args} />

Example.args = {
  label: 'Loading…',
  value: 80
}
