import {Checkbox} from '../src/components/Checkbox'
import {CheckboxGroup} from '../src/components/CheckboxGroup'

export const Example = (args: any) => (
  <CheckboxGroup {...args}>
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
)

Example.args = {
  label: 'Favorite sports'
}
