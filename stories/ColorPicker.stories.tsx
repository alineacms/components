import {ColorPicker} from '../src/todo/ColorPicker.tsx'

export const Example = (args: any) => <ColorPicker {...args} />

Example.args = {
  label: 'Fill color',
  defaultValue: '#f00'
}
