import {Checkbox} from '../src/components/Checkbox.tsx'
import {CheckboxGroup} from '../src/components/CheckboxGroup.tsx'

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
