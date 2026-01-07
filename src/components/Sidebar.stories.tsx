import {IcRoundKeyboardArrowDown} from '../stories/icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundSettings} from '../stories/icons/IcRoundSettings.tsx'
import {IcRoundViewList} from '../stories/icons/IcRoundViewList.tsx'
import {Button} from './Button.tsx'
import {Icon} from './Icon.tsx'
import {List, ListItem} from './List.tsx'
import {SearchField} from './SearchField.tsx'
import {
  Sidebar,
  SidebarCaption,
  SidebarHeader,
  SidebarRow,
  SidebarSection,
  SidebarTitle
} from './Sidebar.tsx'

export function Basic() {
  return (
    <Sidebar style={{height: 520}}>
      <SidebarHeader>
        <SidebarRow>
          <SidebarTitle>
            <span
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24,
                borderRadius: 8,
                background: 'var(--alinea-primary-100)',
                color: 'var(--alinea-primary-800)',
                fontWeight: 700
              }}
            >
              a
            </span>
            Primary workspace
          </SidebarTitle>
          <Button appearance="plain" size="square-petite" aria-label="Switch">
            <IcRoundKeyboardArrowDown data-slot="icon" />
          </Button>
        </SidebarRow>
        <SidebarCaption>
          <Icon icon={IcRoundViewList} />
          Published
        </SidebarCaption>
        <SearchField
          aria-label="Search"
          placeholder="Search"
          hasIcon
        />
      </SidebarHeader>
      <SidebarSection>
        <List>
          <ListItem leading={<Icon icon={IcRoundViewList} />}>
            Content
          </ListItem>
          <ListItem leading={<Icon icon={IcRoundSettings} />}>
            Settings
          </ListItem>
        </List>
      </SidebarSection>
    </Sidebar>
  )
}

export default {
  title: 'Components / Sidebar'
}
