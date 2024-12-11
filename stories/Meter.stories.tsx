import {Meter} from '../src/todo/Meter.tsx'

export const Example = (args: any) => <Meter {...args} />

Example.args = {
  label: 'Storage space',
  value: 80
}
