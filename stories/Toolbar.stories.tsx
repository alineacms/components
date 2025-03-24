import {Button} from '../src/components/Button.tsx'
import {
  ToolbarSeparator as Separator,
  Toolbar,
  ToolbarGroup
} from '../src/components/Toolbar.tsx'
import {IcRoundBrightness} from '../src/icons/IcRoundBrightness.tsx'
import '../src/components/Toolbar.css'
import {Icon} from '../src/components/Icon.tsx'
import {Menu, MenuItem} from '../src/components/Menu.tsx'
import {IcRoundUnfoldMore} from '../src/icons/IcRoundUnfoldMore.tsx'

export const Example = (args: any) => (
  <Toolbar aria-label="Text formatting" data-orientation="horizontal" {...args}>
    <ToolbarGroup>
      <Menu
        label={
          <Button appearance="plain">
            Options...
            <IcRoundUnfoldMore />
          </Button>
        }
      >
        <MenuItem>
          <IcRoundBrightness />
          Undo
        </MenuItem>
        <MenuItem>
          <IcRoundBrightness />
          Redo
        </MenuItem>
        <MenuItem>
          <IcRoundBrightness />
          Insert Link
        </MenuItem>
        <MenuItem>
          <IcRoundBrightness />
          Insert Image
        </MenuItem>
        <MenuItem>
          <IcRoundBrightness />
          Insert Grid
        </MenuItem>
      </Menu>
    </ToolbarGroup>

    <Separator />

    <ToolbarGroup>
      <Button size="square-petite" appearance="plain" data-appearance="active">
        <Icon icon={IcRoundBrightness} />
      </Button>

      <Menu
        label={
          <Button size="large" appearance="plain">
            <Icon icon={IcRoundBrightness} />
            <Icon icon={IcRoundUnfoldMore} />
          </Button>
        }
      >
        <MenuItem>
          <IcRoundBrightness />
          Undo
        </MenuItem>
        <MenuItem>
          <IcRoundBrightness />
          Redo
        </MenuItem>
        <MenuItem>
          <IcRoundBrightness />
          Insert Link
        </MenuItem>
        <MenuItem>
          <IcRoundBrightness />
          Insert Image
        </MenuItem>
        <MenuItem>
          <IcRoundBrightness />
          Insert Grid
        </MenuItem>
      </Menu>

      <Button size="square-petite" appearance="plain">
        <Icon icon={IcRoundBrightness} />
      </Button>

      <Button size="square-petite" appearance="plain">
        <Icon icon={IcRoundBrightness} />
      </Button>
    </ToolbarGroup>

    <Separator />

    <ToolbarGroup>
      <Button size="square-petite" appearance="plain">
        <Icon icon={IcRoundBrightness} />
      </Button>
      <Button size="square-petite" appearance="plain">
        <Icon icon={IcRoundBrightness} />
      </Button>
    </ToolbarGroup>

    <Separator />

    <ToolbarGroup>
      <Button size="square-petite" appearance="plain">
        <Icon icon={IcRoundBrightness} />
      </Button>
    </ToolbarGroup>

    <Separator />

    <ToolbarGroup>
      <Button size="square-petite" appearance="plain">
        <Icon icon={IcRoundBrightness} />
      </Button>
      <Button size="square-petite" appearance="plain">
        <Icon icon={IcRoundBrightness} />
      </Button>
    </ToolbarGroup>

    <Separator />

    <ToolbarGroup>
      <Button size="square-petite" appearance="plain">
        <Icon icon={IcRoundBrightness} />
      </Button>
    </ToolbarGroup>
  </Toolbar>
)
