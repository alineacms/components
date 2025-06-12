import {ColorSlider} from './ColorSlider.tsx'

export const Example = (args: any) => <ColorSlider {...args} />

Example.args = {
  label: 'Red Opacity',
  defaultValue: '#f00',
  channel: 'alpha'
}

export default { title: 'Todo / ColorSlider' }
