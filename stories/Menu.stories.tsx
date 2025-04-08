import {useState} from 'react'
import {
  MenuSection,
  type Selection as SelectionType
} from 'react-aria-components'
import {Button} from '../src/components/Button.tsx'
import {Icon} from '../src/components/Icon.tsx'
import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuSeparator
} from '../src/components/Menu.tsx'
import {IcRoundArchive} from '../src/icons/IcRoundArchive.tsx'
import {IcRoundHistory} from '../src/icons/IcRoundHistory.tsx'
import {Stack} from './Stack.tsx'

const items = [
  {id: 1, name: 'New'},
  {id: 2, name: 'Open'},
  {id: 3, name: 'Close'},
  {id: 4, name: 'Save'},
  {id: 5, name: 'Duplicate'},
  {id: 6, name: 'Rename'},
  {id: 7, name: 'Move'}
]

export const Example = () => (
  <Stack>
    <Menu label="Default">
      {items.map(item => (
        <MenuItem key={item.id}>{item.name}</MenuItem>
      ))}
    </Menu>

    <Menu label="Menu ☰">
      {items.map(item => (
        <MenuItem key={item.id}>{item.name}</MenuItem>
      ))}
    </Menu>

    <Menu
      label="Menu with disabledKeys"
      disabledKeys={['react-aria-4', 'react-aria-6']}
    >
      {items.map(item => (
        <MenuItem key={item.id}>{item.name}</MenuItem>
      ))}
    </Menu>

    <Menu label="Menu with icons">
      <MenuItem>
        <Icon icon={IcRoundHistory} data-slot="icon" />
        Show history
      </MenuItem>
      <MenuItem>
        <Icon icon={IcRoundArchive} data-slot="icon" />
        Archive
      </MenuItem>
    </Menu>

    <Menu label="Separator and sections">
      <MenuSection>
        <MenuHeader>Styles</MenuHeader>
        <MenuItem>Bold</MenuItem>
        <MenuSeparator />
        <MenuItem>Underline</MenuItem>
      </MenuSection>
      <MenuSection>
        <MenuHeader>Align</MenuHeader>
        <MenuItem>Left</MenuItem>
        <MenuItem>Middle</MenuItem>
        <MenuItem>Right</MenuItem>
      </MenuSection>
    </Menu>
  </Stack>
)

export const Selection = () => {
  const [style, setStyle] = useState<SelectionType>(new Set(['bold']))
  const [align, setAlign] = useState<SelectionType>(new Set(['left']))

  return (
    <>
      <Menu label="Actions">
        <MenuSection>
          <MenuHeader>Actions</MenuHeader>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenuSection>
        <MenuSection
          selectionMode="multiple"
          selectedKeys={style}
          onSelectionChange={setStyle}
        >
          <MenuHeader>Style (selectionMode multiple)</MenuHeader>
          <MenuItem id="bold">Bold</MenuItem>
          <MenuItem id="italic">Italic</MenuItem>
          <MenuItem id="underline">Underline</MenuItem>
        </MenuSection>
        <MenuSection
          selectionMode="single"
          selectedKeys={align}
          onSelectionChange={setAlign}
        >
          <MenuHeader>Alignment (selectionMode single)</MenuHeader>
          <MenuItem id="left">Left</MenuItem>
          <MenuItem id="center">Center</MenuItem>
          <MenuItem id="right">Right</MenuItem>
        </MenuSection>
      </Menu>

      <p>Current selection (controlled): {[...style, ...align].join(', ')}</p>
    </>
  )
}

export const Submenus = () => (
  <Menu label={<Button intent="secondary">Actions</Button>}>
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Delete</MenuItem>
    <Menu label={<MenuItem>Share</MenuItem>}>
      <MenuItem>SMS</MenuItem>
      <MenuItem>X</MenuItem>
      <Menu label={<MenuItem>Email</MenuItem>}>
        <MenuItem>Work</MenuItem>
        <MenuItem>Personal</MenuItem>
      </Menu>
    </Menu>
  </Menu>
)
