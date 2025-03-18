import {MenuButton, MenuItem} from '../src/components/Menu.tsx'

export const Example = (args: any) => (
  <MenuButton label="Edit">
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Paste</MenuItem>
  </MenuButton>
)
