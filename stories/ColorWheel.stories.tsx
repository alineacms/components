import {ColorWheel} from '../src/todo/ColorWheel.tsx'

export const Example = (args: any) => <ColorWheel {...args} />

Example.args = {
  defaultValue: 'hsl(30, 100%, 50%)'
}
