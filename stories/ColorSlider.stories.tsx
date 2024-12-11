import {ColorSlider} from '../src/todo/ColorSlider.tsx'

export const Example = (args: any) => <ColorSlider {...args} />

Example.args = {
  label: 'Red Opacity',
  defaultValue: '#f00',
  channel: 'alpha'
}
