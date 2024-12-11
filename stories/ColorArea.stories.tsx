import {ColorArea} from '../src/todo/ColorArea.tsx'

export const Example = (args: any) => <ColorArea {...args} />

Example.args = {
  defaultValue: 'hsl(30, 100%, 50%)'
}
