import {Meter} from './Meter.tsx'

export const Example = (args: any) => <Meter {...args} />

Example.args = {
  label: 'Storage space',
  value: 80
}

export default { title: 'Todo / Meter' }
