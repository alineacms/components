import {ColorPicker} from './ColorPicker.tsx'

export const Example = (args: any) => <ColorPicker {...args} />

Example.args = {
  label: 'Fill color',
  defaultValue: '#f00'
}
