import './Dashboard.css'
import {Button} from '../components/Button.tsx'
import {Elevation} from '../components/Elevation.tsx'
import {Icon} from '../components/Icon.tsx'
import {Label} from '../components/Label.tsx'
import {List, ListItem} from '../components/List.tsx'
import {Menu, MenuItem} from '../components/Menu.tsx'
import {SearchField} from '../components/SearchField.tsx'
import {
  Sidebar,
  SidebarHeader,
  SidebarRow,
  SidebarSection
} from '../components/Sidebar.tsx'
import {Tab, TabList, Tabs} from '../components/Tabs.tsx'
import {TextField} from '../components/TextField.tsx'
import {Tree, TreeItem} from '../todo/Tree.tsx'
import {IcRoundArrowBack} from './icons/IcRoundArrowBack.tsx'
import {IcRoundContentCopy} from './icons/IcRoundContentCopy.tsx'
import {IcRoundDelete} from './icons/IcRoundDelete.tsx'
import {IcRoundDescription} from './icons/IcRoundDescription.tsx'
import {IcRoundHome} from './icons/IcRoundHome.tsx'
import {IcRoundKeyboardArrowDown} from './icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundMoreVert} from './icons/IcRoundMoreVert.tsx'
import {IcRoundPermMedia} from './icons/IcRoundPermMedia.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'
import {IcRoundTextFields} from './icons/IcRoundTextFields.tsx'
import {IcRoundUnfoldMore} from './icons/IcRoundUnfoldMore.tsx'
import {IcRoundViewList} from './icons/IcRoundViewList.tsx'
import {IcRoundVisibility} from './icons/IcRoundVisibility.tsx'

const TreeRow = ({
  icon,
  label,
  meta
}: {
  icon: React.ReactNode
  label: string
  meta?: React.ReactNode
}) => (
  <span className="alinea-rac-TreeItemRow">
    <span className="alinea-rac-TreeItemIcon">{icon}</span>
    <span className="alinea-rac-TreeItemLabel">{label}</span>
    {meta ? <span className="alinea-rac-TreeItemMeta">{meta}</span> : null}
  </span>
)

const Status = ({children}: {children: React.ReactNode}) => (
  <span className="alinea-rac-TreeItemStatus">{children}</span>
)

export function Dashboard() {
  return (
    <div className="alinea-dashboard">
      <div className="alinea-dashboard-rail">
        <Button appearance="plain" size="icon" aria-label="Home">
          <IcRoundHome data-slot="icon" />
        </Button>
        <Button appearance="plain" size="icon" aria-label="Content">
          <IcRoundViewList data-slot="icon" />
        </Button>
        <Button appearance="plain" size="icon" aria-label="Settings">
          <IcRoundSettings data-slot="icon" />
        </Button>
      </div>
      <Sidebar className="alinea-dashboard-sidebar">
        <SidebarHeader>
          <SidebarRow>
            <Menu
              selectionMode="single"
              defaultSelectedKeys={['primary']}
              label={
                <Button
                  appearance="plain"
                  className="alinea-dashboard-workspace-trigger"
                >
                  <span className="alinea-dashboard-workspace-title">
                    <span
                      className="alinea-dashboard-avatar"
                      aria-hidden="true"
                    >
                      a
                    </span>
                    Primary workspace
                  </span>
                  <IcRoundKeyboardArrowDown data-slot="icon" />
                </Button>
              }
            >
              <MenuItem id="primary">Primary workspace</MenuItem>
              <MenuItem id="marketing">Marketing site</MenuItem>
              <MenuItem id="docs">Docs</MenuItem>
              <MenuItem id="demo">Demo space</MenuItem>
            </Menu>
          </SidebarRow>
          <SearchField aria-label="Search" placeholder="Search" hasIcon />
        </SidebarHeader>
        <SidebarSection>
          <Tree
            aria-label="Content navigation"
            selectionMode="single"
            selectionBehavior="replace"
            defaultSelectedKeys={['list-fields']}
            defaultExpandedKeys={['examples', 'status']}
          >
            <TreeItem
              key="examples"
              title="Examples"
              content={
                <TreeRow
                  icon={<Icon icon={IcRoundDescription} />}
                  label="Examples"
                />
              }
            >
              <TreeItem
                key="extra-root-tab"
                title="Extra root tab"
                content={
                  <TreeRow
                    icon={<Icon icon={IcRoundDescription} />}
                    label="Extra root tab"
                  />
                }
              />
              <TreeItem
                key="rich-text-fields"
                title="Rich text fields"
                content={
                  <TreeRow
                    icon={<Icon icon={IcRoundDescription} />}
                    label="Rich text fields"
                    meta={<Status>Published</Status>}
                  />
                }
              />
              <TreeItem
                key="custom-view"
                title="Custom view"
                content={
                  <TreeRow
                    icon={<Icon icon={IcRoundDescription} />}
                    label="Custom view"
                  />
                }
              />
              <TreeItem
                key="list-fields"
                title="List fields"
                content={
                  <TreeRow
                    icon={<Icon icon={IcRoundViewList} />}
                    label="List fields"
                    meta={<Status>Draft</Status>}
                  />
                }
              />
            </TreeItem>
            <TreeItem
              key="status"
              title="Status"
              content={
                <TreeRow
                  icon={<Icon icon={IcRoundSettings} />}
                  label="Status"
                />
              }
            >
              <TreeItem
                key="published"
                title="Published"
                content={
                  <TreeRow
                    icon={<Icon icon={IcRoundVisibility} />}
                    label="Published"
                    meta={<Status>Live</Status>}
                  />
                }
              />
              <TreeItem
                key="unpublished"
                title="Unpublished"
                content={
                  <TreeRow
                    icon={<Icon icon={IcRoundVisibility} />}
                    label="Unpublished"
                    meta={<Status>Offline</Status>}
                  />
                }
              />
            </TreeItem>
          </Tree>
        </SidebarSection>
      </Sidebar>
      <main className="alinea-dashboard-main">
        <div className="alinea-dashboard-topbar">
          <div className="alinea-dashboard-top-actions">
            <Button appearance="plain" size="icon" aria-label="More">
              <IcRoundMoreVert data-slot="icon" />
            </Button>
          </div>
        </div>
        <div className="alinea-dashboard-titlebar">
          <div className="alinea-dashboard-titlebar-main">
            <Button appearance="plain" size="icon" aria-label="Back">
              <IcRoundArrowBack data-slot="icon" />
            </Button>
            <h1>List fields</h1>
            <Button appearance="outline" intent="secondary" size="small">
              List fields
            </Button>
          </div>
          <div className="alinea-dashboard-status">
            <Icon icon={IcRoundVisibility} />
            Published
          </div>
        </div>
        <Tabs defaultSelectedKey="document">
          <TabList>
            <Tab id="document">Document</Tab>
            <Tab id="metadata">Metadata</Tab>
          </TabList>
        </Tabs>
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
                  <Button appearance="plain" size="icon">
                    <IcRoundContentCopy data-slot="icon" />
                  </Button>
                  <Button appearance="plain" size="icon">
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
                  <Button appearance="plain" size="icon">
                    <IcRoundContentCopy data-slot="icon" />
                  </Button>
                  <Button appearance="plain" size="icon">
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
              <Button appearance="outline" intent="secondary" size="small">
                <Icon icon={IcRoundTextFields} data-slot="icon" />
                Text
              </Button>
              <Button appearance="outline" intent="secondary" size="small">
                <Icon icon={IcRoundPermMedia} data-slot="icon" />
                Image
              </Button>
              <Button appearance="outline" intent="secondary" size="small">
                Paste block
              </Button>
            </ListItem>
          </List>
        </Label>
      </main>
    </div>
  )
}

export default {
  title: 'Stories / Dashboard'
}
