import {parseDate} from '@internationalized/date'
import {useState} from 'react'
import {Button} from '../components/Button.tsx'
import {DatePicker} from '../components/DatePicker.tsx'
import {Elevation} from '../components/Elevation.tsx'
import {Icon} from '../components/Icon.tsx'
import {Label} from '../components/Label.tsx'
import {Menu, MenuItem} from '../components/Menu.tsx'
import {Tab, TabList, TabPanel, Tabs} from '../components/Tabs.tsx'
import {TextField} from '../components/TextField.tsx'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader
} from '../todo/Sidebar.tsx'
import {Tree, TreeItem} from '../todo/Tree.tsx'
import {IcOutlineDescription} from './icons/IcOutlineDescription.tsx'
import {IcRoundAddCircle} from './icons/IcRoundAddCircle.tsx'
import {IcRoundArrowBack} from './icons/IcRoundArrowBack.tsx'
import {IcRoundClose} from './icons/IcRoundClose.tsx'
import {IcRoundDescription} from './icons/IcRoundDescription.tsx'
import {IcRoundEdit} from './icons/IcRoundEdit.tsx'
import {IcRoundHome} from './icons/IcRoundHome.tsx'
import {IcRoundHistory} from './icons/IcRoundHistory.tsx'
import {IcRoundKeyboardArrowLeft} from './icons/IcRoundKeyboardArrowLeft.tsx'
import {IcRoundKeyboardArrowDown} from './icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowRight} from './icons/IcRoundKeyboardArrowRight.tsx'
import {IcRoundLink} from './icons/IcRoundLink.tsx'
import {IcRoundMoreVert} from './icons/IcRoundMoreVert.tsx'
import {IcRoundOpenInNew} from './icons/IcRoundOpenInNew.tsx'
import {IcRoundSearch} from './icons/IcRoundSearch.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'
import {IcRoundVisibility} from './icons/IcRoundVisibility.tsx'
import './Dashboard.css'

/* ------------------------------------------------------------------ */
/*  Small helpers                                                     */
/* ------------------------------------------------------------------ */

function StatusBadge({children}: {children: React.ReactNode}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 'var(--alinea-font-size-base)',
        color: '#16a34a'
      }}
    >
      <Icon icon={IcRoundVisibility} style={{width: 16, height: 16}} />
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Link field (URL with action buttons)                              */
/* ------------------------------------------------------------------ */

function LinkField({label, value}: {label: string; value: string}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
      <span
        style={{
          fontSize: 'var(--alinea-font-size-base)',
          color: 'var(--alinea-text-color-base)',
          fontWeight: 500
        }}
      >
        {label}
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          border: '1px solid var(--alinea-border-color)',
          borderRadius: 6,
          padding: '0 4px 0 8px',
          height: 36,
          background: 'var(--alinea-field-background)'
        }}
      >
        <Icon
          icon={IcRoundLink}
          style={{
            width: 16,
            height: 16,
            color: 'var(--alinea-text-color-base)',
            flexShrink: 0
          }}
        />
        <span
          style={{
            flex: 1,
            fontSize: 'var(--alinea-font-size-base)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: 'var(--alinea-text-color)'
          }}
        >
          {value}
        </span>
        <Button size="icon" appearance="plain" aria-label="Open in new tab">
          <IcRoundOpenInNew data-slot="icon" />
        </Button>
        <Button size="icon" appearance="plain" aria-label="Edit">
          <IcRoundEdit data-slot="icon" />
        </Button>
        <Button size="icon" appearance="plain" aria-label="Remove">
          <IcRoundClose data-slot="icon" />
        </Button>
      </div>
    </div>
  )
}

function AlineaLogo() {
  return (
    <svg
      aria-hidden
      className="alinea-dashboard-workspaceLogo"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.9814 3.47727V5.07955C14.8773 3.78409 13.2379 3 10.9963 3C6.61338 3 3 6.92045 3 12C3 17.0795 6.61338 21 10.9963 21C13.2379 21 14.8773 20.2159 15.9814 18.9205V20.5227H21V3.47727H15.9814ZM12 16.1591C9.69145 16.1591 8.01859 14.5568 8.01859 12C8.01859 9.44318 9.69145 7.84091 12 7.84091C14.3086 7.84091 15.9814 9.44318 15.9814 12C15.9814 14.5568 14.3086 16.1591 12 16.1591Z"
        fill="currentColor"
      />
    </svg>
  )
}

interface HistoryEntry {
  id: string
  title: string
  changedBy: string
  changedAt: string
}

const historyEntries: HistoryEntry[] = [
  {
    id: 'edit-1',
    title: 'Updated hero copy',
    changedBy: 'Ben Merckx',
    changedAt: 'Today at 10:42'
  },
  {
    id: 'edit-2',
    title: 'Adjusted publish date',
    changedBy: 'Sarah Johnson',
    changedAt: 'Today at 09:18'
  },
  {
    id: 'edit-3',
    title: 'Reworked introduction',
    changedBy: 'Ben Merckx',
    changedAt: 'Yesterday at 17:04'
  },
  {
    id: 'edit-4',
    title: 'Added author avatar url',
    changedBy: 'Alex Chen',
    changedAt: 'February 14 at 14:27'
  }
]

/* ------------------------------------------------------------------ */
/*  Dashboard story                                                   */
/* ------------------------------------------------------------------ */

export function Home() {
  const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(false)

  return (
    <div
      className={`alinea-dashboard-story${isRightSidebarCollapsed ? ' alinea-dashboard-story--rightCollapsed' : ''}`}
    >
      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>
          <div className="alinea-dashboard-sidebarRow">
            <div className="alinea-dashboard-sidebarRowMenu">
              <Menu
                label={
                  <Button
                    appearance="plain"
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      fontWeight: 600,
                      fontSize: 'var(--alinea-font-size-base)',
                      padding: '4px 8px'
                    }}
                  >
                    <span className="alinea-dashboard-workspaceLabel">
                      <AlineaLogo />
                      Alinea
                    </span>
                    <IcRoundKeyboardArrowDown data-slot="icon" />
                  </Button>
                }
              >
                <MenuItem id="alinea">Alinea</MenuItem>
                <MenuItem id="marketing">Marketing</MenuItem>
                <MenuItem id="docs">Docs</MenuItem>
              </Menu>
            </div>
            <Button size="icon" appearance="plain" aria-label="Search pages">
              <IcRoundSearch data-slot="icon" />
            </Button>
          </div>
        </SidebarHeader>

        <SidebarBody style={{padding: '0 12px'}}>
          <div className="alinea-dashboard-sidebarRow alinea-dashboard-sidebarSectionHeader">
            <div className="alinea-dashboard-sidebarRowMenu">
              <Menu
                label={
                  <Button
                    appearance="plain"
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      fontSize: 'var(--alinea-font-size-base)',
                      fontWeight: 600,
                      color: 'var(--alinea-text-color-base)',
                      padding: '4px 8px'
                    }}
                  >
                    Pages
                    <IcRoundKeyboardArrowDown data-slot="icon" />
                  </Button>
                }
              >
                <MenuItem id="all-pages">All pages</MenuItem>
                <MenuItem id="recent-pages">Recent</MenuItem>
                <MenuItem id="archived-pages">Archived</MenuItem>
              </Menu>
            </div>
            <Button size="icon" appearance="plain" aria-label="Create new page">
              <IcRoundAddCircle data-slot="icon" />
            </Button>
          </div>
          <Tree
            aria-label="Pages"
            selectionMode="single"
            selectionBehavior="replace"
            defaultSelectedKeys={['blog-vercel']}
            defaultExpandedKeys={['blog']}
          >
            <TreeItem id="index" title="Index" icon={IcRoundHome} />
            <TreeItem id="blog" title="Blog" icon={IcOutlineDescription}>
              <TreeItem
                id="blog-vercel"
                title="Joining the Vercel Open Sour..."
                icon={IcRoundDescription}
              />
              <TreeItem
                id="blog-update"
                title="A Long-Overdue Update"
                icon={IcRoundDescription}
              />
              <TreeItem
                id="blog-rsc"
                title="RSC support and instant depl..."
                icon={IcRoundDescription}
              />
              <TreeItem
                id="blog-intro"
                title="Introducing Alinea"
                icon={IcRoundDescription}
              />
            </TreeItem>
            <TreeItem id="docs" title="Docs" icon={IcOutlineDescription} />
            <TreeItem id="roadmap" title="Roadmap" icon={IcRoundDescription} />
          </Tree>
        </SidebarBody>
        <SidebarFooter className="alinea-dashboard-sidebarFooter">
          <Button
            appearance="plain"
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              gap: 8,
              fontSize: 'var(--alinea-font-size-base)',
              color: 'var(--alinea-text-color-base)'
            }}
          >
            <Icon icon={IcRoundSettings} data-slot="icon" />
            User settings
          </Button>
        </SidebarFooter>
      </Sidebar>

      {/* Main content */}
      <main className="alinea-dashboard-main">
        {/* Top bar */}
        <header className="alinea-dashboard-header">
          <Button size="icon" appearance="plain" aria-label="Go back">
            <IcRoundArrowBack data-slot="icon" />
          </Button>
          <h1
            style={{
              fontSize: 'var(--alinea-font-size-base)',
              fontWeight: 600,
              margin: 0
            }}
          >
            Joining the Vercel Open Source Program
          </h1>
          <div style={{flex: 1}} />
          <StatusBadge>Published</StatusBadge>
          <Button size="icon" appearance="plain" aria-label="More options">
            <IcRoundMoreVert data-slot="icon" />
          </Button>
          {isRightSidebarCollapsed ? (
            <Button
              size="icon"
              appearance="plain"
              aria-label="Expand right sidebar"
              onPress={() => setIsRightSidebarCollapsed(false)}
            >
              <IcRoundKeyboardArrowLeft data-slot="icon" />
            </Button>
          ) : null}
        </header>

        {/* Tabs */}
        <div className="alinea-dashboard-tabs">
          <Tabs variant="subtle">
            <TabList>
              <Tab id="document">
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  <IcRoundDescription style={{width: 16, height: 16}} />
                  Document
                </span>
              </Tab>
              <Tab id="metadata">
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  <IcRoundSettings style={{width: 16, height: 16}} />
                  Metadata
                </span>
              </Tab>
            </TabList>

            <TabPanel id="document">
              <div className="alinea-dashboard-form">
                {/* Title & Path */}
                <div className="alinea-dashboard-twoCol">
                  <TextField
                    label="Title"
                    isRequired
                    defaultValue="Joining the Vercel Open Source Program"
                  />
                  <TextField
                    label="Path"
                    isRequired
                    defaultValue="vercel-open-source-program"
                  />
                </div>

                {/* Publish date */}
                <DatePicker
                  label="Publish date"
                  defaultValue={parseDate('2025-11-08')}
                />

                {/* Author object */}
                <div>
                  <Label label="Author" />
                  <Elevation style={{padding: 16}}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16
                      }}
                    >
                      <div className="alinea-dashboard-twoCol">
                        <TextField label="Name" defaultValue="Ben Merckx" />
                        <LinkField
                          label="Url"
                          value="https://github.com/benmerc..."
                        />
                      </div>
                      <LinkField
                        label="Avatar url"
                        value="https://avatars.githubusercontent.com/u/10584189?v=4&s=48"
                      />
                    </div>
                  </Elevation>
                </div>

                {/* Short introduction */}
                <TextField
                  label="Short introduction"
                  multiline
                  rows={3}
                  defaultValue="We're honored that Alinea CMS is part of the Vercel Open Source Program - Summer 2025 cohort. This recognition supports our mission to offer a clean, Git-based CMS built for Next.js."
                />

                {/* Body */}
                <TextField
                  label="Body"
                  multiline
                  rows={4}
                  defaultValue="We are pleased to share that Alinea CMS has been selected for the Vercel Open Source Program - Summer 2025 cohort. This program supports open source maintainers with the resources, infrastructure,"
                />
              </div>
            </TabPanel>

            <TabPanel id="metadata">
              <div className="alinea-dashboard-form">
                <p style={{color: 'var(--alinea-text-color-base)'}}>
                  Metadata fields will appear here.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </main>

      {/* Right sidebar */}
      {!isRightSidebarCollapsed ? (
        <Sidebar className="alinea-dashboard-rightSidebar">
          <Tabs variant="subtle" defaultSelectedKey="history">
            <SidebarHeader className="alinea-dashboard-rightSidebarHeader">
              <div className="alinea-dashboard-rightSidebarHeaderRow">
                <TabList>
                  <Tab id="history">
                    <span className="alinea-dashboard-tabLabel">
                      <IcRoundHistory style={{width: 16, height: 16}} />
                      History
                    </span>
                  </Tab>
                  <Tab id="preview">
                    <span className="alinea-dashboard-tabLabel">
                      <IcRoundVisibility style={{width: 16, height: 16}} />
                      Preview
                    </span>
                  </Tab>
                </TabList>
                <Button
                  size="icon"
                  appearance="plain"
                  aria-label="Collapse right sidebar"
                  onPress={() => setIsRightSidebarCollapsed(true)}
                >
                  <IcRoundKeyboardArrowRight data-slot="icon" />
                </Button>
              </div>
            </SidebarHeader>
            <SidebarBody className="alinea-dashboard-rightSidebarBody">
              <TabPanel id="history">
                <div className="alinea-dashboard-historyTimeline">
                  {historyEntries.map(entry => (
                    <div key={entry.id} className="alinea-dashboard-historyItem">
                      <div className="alinea-dashboard-historyDot" />
                      <div className="alinea-dashboard-historyContent">
                        <p className="alinea-dashboard-historyTitle">{entry.title}</p>
                        <p className="alinea-dashboard-historyMeta">
                          {entry.changedBy} - {entry.changedAt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>

              <TabPanel id="preview">
                <p className="alinea-dashboard-previewText">
                  Preview panel content will appear here.
                </p>
              </TabPanel>
            </SidebarBody>
          </Tabs>
        </Sidebar>
      ) : null}
    </div>
  )
}

export default {title: 'Stories / Dashboard'}
