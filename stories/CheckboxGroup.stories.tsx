import {Checkbox} from '../src/components/Checkbox.tsx'
import {CheckboxGroup} from '../src/components/CheckboxGroup.tsx'
import {Stack} from './Stack.tsx'
export const Example = (args: any) => (
  <Stack>
    <CheckboxGroup {...args}>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup
      label="Invalid selection"
      errorMessage="You must select at least one option"
    >
      <Checkbox value="option1">Option 1</Checkbox>
      <Checkbox value="option2">Option 2</Checkbox>
      <Checkbox value="option3">Option 3</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup
      label="More choices"
      description="Choose as many as you like"
    >
      <Checkbox value="optionA">Option A</Checkbox>
      <Checkbox value="optionB">Option B</Checkbox>
      <Checkbox value="optionC">Option C</Checkbox>
    </CheckboxGroup>
  </Stack>
)

Example.args = {
  label: 'Favorite sports',
  description: 'Select all that apply'
}
