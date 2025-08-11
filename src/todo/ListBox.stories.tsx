import {ListBox, ListBoxItem} from './ListBox.tsx'

export const Example = (args: any) => (
  <ListBox aria-label="Ice cream flavor" {...args}>
    <ListBoxItem>Chocolate</ListBoxItem>
    <ListBoxItem>Mint</ListBoxItem>
    <ListBoxItem>Strawberry</ListBoxItem>
    <ListBoxItem>Vanilla</ListBoxItem>
  </ListBox>
)

Example.args = {
  onAction: null,
  selectionMode: 'single'
}

export default { title: 'Todo / ListBox' }
