import {ComboBox, ComboBoxItem} from '../src/todo/ComboBox.tsx'

export const Example = (args: any) => (
  <ComboBox {...args}>
    <ComboBoxItem>Chocolate</ComboBoxItem>
    <ComboBoxItem>Mint</ComboBoxItem>
    <ComboBoxItem>Strawberry</ComboBoxItem>
    <ComboBoxItem>Vanilla</ComboBoxItem>
  </ComboBox>
)

Example.args = {
  label: 'Ice cream flavor'
}
