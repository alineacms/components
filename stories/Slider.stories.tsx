import {Slider} from '../src/todo/Slider.tsx'

export const Example = (args: any) => <Slider {...args} />

Example.args = {
  label: 'Range',
  defaultValue: [30, 60],
  thumbLabels: ['start', 'end']
}
