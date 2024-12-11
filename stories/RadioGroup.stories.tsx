import {Radio} from 'react-aria-components'
import {RadioGroup} from '../src/todo/RadioGroup.tsx'

export const Example = (args: any) => (
  <RadioGroup {...args}>
    <Radio value="soccer">Soccer</Radio>
    <Radio value="baseball">Baseball</Radio>
    <Radio value="basketball">Basketball</Radio>
  </RadioGroup>
)

Example.args = {
  label: 'Favorite sport'
}
