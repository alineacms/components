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

    <form onSubmit={(e) => e.preventDefault()}>
      <CheckboxGroup
      label="Invalid selection"
      errorMessage="You must select at least one option"
      >
      <Checkbox value="option1">Option 1</Checkbox>
      <Checkbox value="option2">Option 2</Checkbox>
      <Checkbox value="option3">Option 3</Checkbox>
      </CheckboxGroup>
      <button type="submit">Submit</button>
    </form>

    <CheckboxGroup
      label="More choices"
      description="Choose as many as you like and I am not going to judge you but I am going to make this a very long description to see how it looks like and if it wraps correctly or not and if it does not wrap correctly then I am going to be very sad and I am going to cry and I am going to be very sad and I am going to cry"  
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
