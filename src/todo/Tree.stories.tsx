import {Tree, TreeItem} from './Tree.tsx'

export const Example = args => (
  <Tree aria-label="Files" {...args}>
    <TreeItem title="Documents">
      <TreeItem title="Project">
        <TreeItem title="Weekly Report" />
      </TreeItem>
    </TreeItem>
    <TreeItem title="Photos">
      <TreeItem title="Image 1" />
      <TreeItem title="Image 2" />
    </TreeItem>
  </Tree>
)

Example.args = {
  style: {height: '300px'},
  defaultExpandedKeys: ['documents', 'photos', 'project']
}
