import {useState} from 'react'
import {
  Header,
  Menu,
  MenuSection,
  MenuTrigger,
  Popover,
  type Selection as SelectionType,
  Separator,
  SubmenuTrigger
} from 'react-aria-components'
import {Button} from '../src/components/Button.tsx'
import {Icon} from '../src/components/Icon.tsx'
import {MenuItem} from '../src/components/Menu.tsx'
import {IcRoundArchive} from '../src/icons/IcRoundArchive.tsx'
import {IcRoundHistory} from '../src/icons/IcRoundHistory.tsx'
import {IcRoundRefresh} from '../src/icons/IcRoundRefresh.tsx'
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
    <MenuTrigger>
      <Button>
        <IcRoundRefresh data-slot="icon" />
        With icon
      </Button>
      <Popover>
        <Menu items={items}>{item => <MenuItem>{item.name}</MenuItem>}</Menu>
      </Popover>
    </MenuTrigger>

    <MenuTrigger>
      <Button aria-label="Menu">Menu ☰</Button>
      <Popover>
        <Menu items={items}>{item => <MenuItem>{item.name}</MenuItem>}</Menu>
      </Popover>
    </MenuTrigger>

    <MenuTrigger>
      <Button aria-label="Menu">Menu with disabledKeys</Button>
      <Popover>
        <Menu items={items} disabledKeys={[4, 6]}>
          {item => <MenuItem>{item.name}</MenuItem>}
        </Menu>
      </Popover>
    </MenuTrigger>

    <MenuTrigger>
      <Button>Menu with icons</Button>
      <Popover>
        <Menu>
          <MenuItem id="left">
            <Icon icon={IcRoundHistory} data-slot="icon" />
            Show history
          </MenuItem>
          <MenuItem id="center">
            <Icon icon={IcRoundArchive} data-slot="icon" />
            Archive
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>

    <MenuTrigger>
      <Button>Separator and sections</Button>
      <Popover>
        <Menu>
          <MenuSection>
            <Header>Styles</Header>
            <MenuItem>Bold</MenuItem>
            <Separator />
            <MenuItem>Underline</MenuItem>
          </MenuSection>
          <MenuSection>
            <Header>Align</Header>
            <MenuItem>Left</MenuItem>
            <MenuItem>Middle</MenuItem>
            <MenuItem>Right</MenuItem>
          </MenuSection>
        </Menu>
      </Popover>
    </MenuTrigger>
  </Stack>
)

export const Selection = () => {
  const [style, setStyle] = useState<SelectionType>(new Set(['bold']))
  const [align, setAlign] = useState<SelectionType>(new Set(['left']))

  return (
    <MenuTrigger>
      <Button>Actions</Button>
      <Popover>
        <Menu>
          <MenuSection>
            <Header>Actions</Header>
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
          </MenuSection>
          <MenuSection
            selectionMode="multiple"
            selectedKeys={style}
            onSelectionChange={setStyle}
          >
            <Header>Text style</Header>
            <MenuItem id="bold">Bold</MenuItem>
            <MenuItem id="italic">Italic</MenuItem>
            <MenuItem id="underline">Underline</MenuItem>
          </MenuSection>
          <MenuSection
            selectionMode="single"
            selectedKeys={align}
            onSelectionChange={setAlign}
          >
            <Header>Text alignment</Header>
            <MenuItem id="left">Left</MenuItem>
            <MenuItem id="center">Center</MenuItem>
            <MenuItem id="right">Right</MenuItem>
          </MenuSection>
        </Menu>
      </Popover>
      <p>Current selection (controlled): {[...style, ...align].join(', ')}</p>
    </MenuTrigger>
  )
}

export const Submenus = () => (
  <MenuTrigger>
    <Button>Actions</Button>
    <Popover>
      <Menu>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Delete</MenuItem>
        <SubmenuTrigger>
          <MenuItem>Share</MenuItem>
          <Popover>
            <Menu>
              <MenuItem>SMS</MenuItem>
              <MenuItem>X</MenuItem>
              <SubmenuTrigger>
                <MenuItem>Email</MenuItem>
                <Popover>
                  <Menu>
                    <MenuItem>Work</MenuItem>
                    <MenuItem>Personal</MenuItem>
                  </Menu>
                </Popover>
              </SubmenuTrigger>
            </Menu>
          </Popover>
        </SubmenuTrigger>
      </Menu>
    </Popover>
  </MenuTrigger>
)
