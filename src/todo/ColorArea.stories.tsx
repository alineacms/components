import {ColorArea} from './ColorArea.tsx'

export const Example = (args: any) => <ColorArea {...args} />

Example.args = {
  defaultValue: 'hsl(30, 100%, 50%)'
}

export default { title: 'Todo / ColorArea' }
