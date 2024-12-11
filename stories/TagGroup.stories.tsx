import {Tag, TagGroup} from '../src/todo/TagGroup.tsx'

export const Example = (args: any) => (
  <TagGroup {...args}>
    <Tag>Chocolate</Tag>
    <Tag>Mint</Tag>
    <Tag>Strawberry</Tag>
    <Tag>Vanilla</Tag>
  </TagGroup>
)

Example.args = {
  label: 'Ice cream flavor',
  selectionMode: 'single'
}
