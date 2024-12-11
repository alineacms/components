import {Select, SelectItem} from '../src/todo/Select.tsx'

export const Example = (args: any) => (
  <Select {...args}>
    <SelectItem>Chocolate</SelectItem>
    <SelectItem>Mint</SelectItem>
    <SelectItem>Strawberry</SelectItem>
    <SelectItem>Vanilla</SelectItem>
  </Select>
)

Example.args = {
  label: 'Ice cream flavor'
}
