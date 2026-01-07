import './Dashboard.css'
import {Button} from '../components/Button.tsx'
import {Elevation} from '../components/Elevation.tsx'
import {Icon} from '../components/Icon.tsx'
import {Label} from '../components/Label.tsx'
import {List, ListItem} from '../components/List.tsx'
import {SearchField} from '../components/SearchField.tsx'
import {
  Sidebar,
  SidebarCaption,
  SidebarHeader,
  SidebarRow,
  SidebarSection,
  SidebarTitle
} from '../components/Sidebar.tsx'
import {Tab, TabList, Tabs} from '../components/Tabs.tsx'
import {TextField} from '../components/TextField.tsx'
import {IcRoundArrowBack} from './icons/IcRoundArrowBack.tsx'
import {IcRoundContentCopy} from './icons/IcRoundContentCopy.tsx'
import {IcRoundDelete} from './icons/IcRoundDelete.tsx'
import {IcRoundDescription} from './icons/IcRoundDescription.tsx'
import {IcRoundHome} from './icons/IcRoundHome.tsx'
import {IcRoundKeyboardArrowDown} from './icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowRight} from './icons/IcRoundKeyboardArrowRight.tsx'
import {IcRoundMoreVert} from './icons/IcRoundMoreVert.tsx'
import {IcRoundPermMedia} from './icons/IcRoundPermMedia.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'
import {IcRoundTextFields} from './icons/IcRoundTextFields.tsx'
import {IcRoundUnfoldMore} from './icons/IcRoundUnfoldMore.tsx'
import {IcRoundViewList} from './icons/IcRoundViewList.tsx'
import {IcRoundVisibility} from './icons/IcRoundVisibility.tsx'

export function Dashboard() {
  return (
    <div className="alinea-dashboard">
      <div className="alinea-dashboard-rail">
        <Button appearance="plain" size="square-petite" aria-label="Home">
          <IcRoundHome data-slot="icon" />
        </Button>
        <Button appearance="plain" size="square-petite" aria-label="Content">
          <IcRoundViewList data-slot="icon" />
        </Button>
        <Button appearance="plain" size="square-petite" aria-label="Settings">
          <IcRoundSettings data-slot="icon" />
        </Button>
      </div>
      <Sidebar className="alinea-dashboard-sidebar">
        <SidebarHeader>
          <SidebarRow>
            <SidebarTitle>
              <span className="alinea-dashboard-avatar" aria-hidden="true">
                a
              </span>
              Primary workspace
            </SidebarTitle>
            <Button appearance="plain" size="square-petite" aria-label="Switch">
              <IcRoundKeyboardArrowDown data-slot="icon" />
            </Button>
          </SidebarRow>
          <SidebarCaption>
            <Icon icon={IcRoundVisibility} />
            Published
          </SidebarCaption>
          <SearchField aria-label="Search" placeholder="Search" hasIcon />
        </SidebarHeader>
        <SidebarSection>
          <List className="alinea-dashboard-nav">
            <ListItem
              leading={<Icon icon={IcRoundDescription} />}
              trailing={<Icon icon={IcRoundKeyboardArrowRight} />}
              inner={
                <List className="alinea-dashboard-nav-children">
                  <ListItem>Extra root tab</ListItem>
                  <ListItem>Rich text fields</ListItem>
                  <ListItem>Custom view</ListItem>
                  <ListItem className="alinea-dashboard-nav-active">
                    List fields
                  </ListItem>
                </List>
              }
            >
              Examples
            </ListItem>
            <ListItem leading={<Icon icon={IcRoundSettings} />}>
              Status
            </ListItem>
          </List>
        </SidebarSection>
      </Sidebar>
      <main className="alinea-dashboard-main">
        <div className="alinea-dashboard-topbar">
          <div className="alinea-dashboard-status">
            <Icon icon={IcRoundVisibility} />
            Published
          </div>
          <div className="alinea-dashboard-top-actions">
            <Button appearance="plain" size="square-petite" aria-label="More">
              <IcRoundMoreVert data-slot="icon" />
            </Button>
          </div>
        </div>
        <div className="alinea-dashboard-titlebar">
          <Button appearance="plain" size="square-petite" aria-label="Back">
            <IcRoundArrowBack data-slot="icon" />
          </Button>
          <h1>List fields</h1>
          <Button appearance="outline" intent="secondary" size="small">
            List fields
          </Button>
        </div>
        <Tabs defaultSelectedKey="document">
          <TabList>
            <Tab id="document">Document</Tab>
            <Tab id="metadata">Metadata</Tab>
          </TabList>
        </Tabs>
        <Elevation className="alinea-dashboard-panel">
          <div className="alinea-dashboard-grid">
            <TextField label="Title" defaultValue="List fields" />
            <TextField label="Path" defaultValue="list-fields" />
          </div>
          <Label label="My list field">
            <List className="alinea-dashboard-blocks">
              <ListItem
                leading={<Icon icon={IcRoundUnfoldMore} />}
                trailing={
                  <div className="alinea-dashboard-block-controls">
                    <Button appearance="plain" size="square-petite">
                      <IcRoundContentCopy data-slot="icon" />
                    </Button>
                    <Button appearance="plain" size="square-petite">
                      <IcRoundDelete data-slot="icon" />
                    </Button>
                  </div>
                }
                inner={
                  <Elevation>
                    <TextField label="Item title" placeholder="Item title" />
                    <TextField
                      label="Item body text"
                      placeholder="Item body text"
                    />
                  </Elevation>
                }
              >
                Text
              </ListItem>
              <ListItem
                leading={<Icon icon={IcRoundUnfoldMore} />}
                trailing={
                  <div className="alinea-dashboard-block-controls">
                    <Button appearance="plain" size="square-petite">
                      <IcRoundContentCopy data-slot="icon" />
                    </Button>
                    <Button appearance="plain" size="square-petite">
                      <IcRoundDelete data-slot="icon" />
                    </Button>
                  </div>
                }
                inner={
                  <Elevation>
                    <TextField label="Item title" placeholder="Item title" />
                    <TextField
                      label="Item body text"
                      placeholder="Item body text"
                    />
                  </Elevation>
                }
              >
                Text
              </ListItem>
              <ListItem>
                <div className="alinea-dashboard-chip">
                  <Icon icon={IcRoundTextFields} />
                  Text
                </div>
                <div className="alinea-dashboard-chip">
                  <Icon icon={IcRoundPermMedia} />
                  Image
                </div>
                <Button appearance="outline" intent="secondary" size="small">
                  Paste block
                </Button>
              </ListItem>
            </List>
          </Label>
        </Elevation>
      </main>
    </div>
  )
}

export default {
  title: 'Stories / Dashboard'
}
