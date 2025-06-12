import {ColorWheel} from './ColorWheel.tsx'

export const Example = (args: any) => <ColorWheel {...args} />

Example.args = {
  defaultValue: 'hsl(30, 100%, 50%)'
}

export default { title: 'Todo / ColorWheel' }
