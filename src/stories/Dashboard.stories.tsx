import {parseDate} from '@internationalized/date'
import {Button} from '../components/Button.tsx'
import {DatePicker} from '../components/DatePicker.tsx'
import {Icon} from '../components/Icon.tsx'
import {SearchField} from '../components/SearchField.tsx'
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
import {IcRoundLink} from './icons/IcRoundLink.tsx'
import {IcRoundMoreVert} from './icons/IcRoundMoreVert.tsx'
import {IcRoundOpenInNew} from './icons/IcRoundOpenInNew.tsx'
import {IcRoundPermMedia} from './icons/IcRoundPermMedia.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'
import {IcRoundVisibility} from './icons/IcRoundVisibility.tsx'

/* ------------------------------------------------------------------ */
/*  Inline styles for the shell layout — to be extracted later        */
/* ------------------------------------------------------------------ */

const shell: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '48px 250px 1fr',
  height: '100vh',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  color: 'var(--alinea-text-color)',
  background: 'var(--alinea-field-background)'
}

const iconRail: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  padding: '12px 0',
  background: 'var(--alinea-background-color)',
  borderRight: '1px solid var(--alinea-border-color)'
}

const mainStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto'
}

const headerBar: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '8px 20px',
  borderBottom: '1px solid var(--alinea-border-color)',
  flexShrink: 0
}

const formArea: React.CSSProperties = {
  padding: '24px 32px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  maxWidth: 820,
  width: '100%'
}

const twoCol: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16
}

/* ------------------------------------------------------------------ */
/*  Small helpers                                                     */
/* ------------------------------------------------------------------ */

function Badge({children}: {children: React.ReactNode}) {
  return (
    <span
      style={{
        fontSize: 12,
        padding: '2px 8px',
        borderRadius: 4,
        background: 'var(--alinea-background-color)',
        color: 'var(--alinea-text-color-base)',
        whiteSpace: 'nowrap'
      }}
    >
      {children}
    </span>
  )
}

function StatusBadge({children}: {children: React.ReactNode}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 13,
        color: '#16a34a'
      }}
    >
      <Icon icon={IcRoundVisibility} style={{width: 16, height: 16}} />
      {children}
    </span>
  )
}

function NavIcon({
  icon,
  active
}: {
  icon: React.ComponentType
  active?: boolean
}) {
  return (
    <button
      type="button"
      style={{
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: 8,
        background: active
          ? 'var(--alinea-icon-background-color-active)'
          : 'transparent',
        color: active
          ? 'var(--alinea-icon-color-active)'
          : 'var(--alinea-icon-color-plain)'
      }}
    >
      <Icon icon={icon} style={{width: 20, height: 20}} />
    </button>
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
          fontSize: 13,
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
            fontSize: 14,
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

/* ------------------------------------------------------------------ */
/*  Dashboard story                                                   */
/* ------------------------------------------------------------------ */

export function Home() {
  return (
    <div style={shell}>
      {/* Icon rail */}
      <nav style={iconRail}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            background: 'var(--alinea-highlight-background)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 8
          }}
        >
          a
        </div>
        <NavIcon icon={IcRoundDescription} active />
        <NavIcon icon={IcRoundPermMedia} />
        <div style={{flex: 1}} />
        <NavIcon icon={IcRoundSettings} />
      </nav>

      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>
          <span style={{fontWeight: 600, fontSize: 15, flex: 1}}>Alinea</span>
        </SidebarHeader>

        <div style={{padding: '4px 12px 8px'}}>
          <SearchField placeholder="Search" hasIcon aria-label="Search pages" />
        </div>

        <SidebarBody style={{padding: '0 8px'}}>
          <Tree
            aria-label="Pages"
            selectionMode="single"
            selectionBehavior="replace"
            defaultSelectedKeys={['blog-vercel']}
            defaultExpandedKeys={['blog']}
          >
            <TreeItem id="index" title="index" icon={<IcRoundHome />} />
            <TreeItem id="blog" title="Blog" icon={<IcOutlineDescription />}>
              <TreeItem
                id="blog-vercel"
                title="Joining the Vercel Open Sour…"
                icon={<IcRoundDescription />}
              />
              <TreeItem
                id="blog-update"
                title="A Long-Overdue Update"
                icon={<IcRoundDescription />}
              />
              <TreeItem
                id="blog-rsc"
                title="RSC support and instant depl…"
                icon={<IcRoundDescription />}
              />
              <TreeItem
                id="blog-intro"
                title="Introducing Alinea 🎉"
                icon={<IcRoundDescription />}
              />
            </TreeItem>
            <TreeItem id="docs" title="docs" icon={<IcOutlineDescription />} />
            <TreeItem
              id="roadmap"
              title="roadmap"
              icon={<IcRoundDescription />}
            />
          </Tree>
        </SidebarBody>

        <SidebarFooter>
          <Button
            appearance="outline"
            intent="secondary"
            style={{width: '100%', justifyContent: 'center'}}
          >
            <IcRoundAddCircle
              data-slot="icon"
              style={{width: 18, height: 18}}
            />
            Create new
          </Button>
        </SidebarFooter>
      </Sidebar>

      {/* Main content */}
      <main style={mainStyle}>
        {/* Top bar */}
        <header style={headerBar}>
          <StatusBadge>Published</StatusBadge>
          <div style={{flex: 1}} />
          <Button size="icon" appearance="plain" aria-label="More options">
            <IcRoundMoreVert data-slot="icon" />
          </Button>
        </header>

        {/* Page heading */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '16px 32px 0'
          }}
        >
          <Button size="icon" appearance="plain" aria-label="Go back">
            <IcRoundArrowBack data-slot="icon" />
          </Button>
          <h1 style={{fontSize: 22, fontWeight: 600, margin: 0}}>
            Joining the Vercel Open Source Program
          </h1>
          <Badge>Blog post</Badge>
        </div>

        {/* Tabs */}
        <div style={{padding: '12px 32px 0'}}>
          <Tabs>
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
              <div style={formArea}>
                {/* Title & Path */}
                <div style={twoCol}>
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
                <fieldset
                  style={{
                    border: '1px solid var(--alinea-border-color)',
                    borderRadius: 8,
                    padding: 16,
                    margin: 0
                  }}
                >
                  <legend
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: 'var(--alinea-text-color-base)',
                      padding: '0 4px'
                    }}
                  >
                    Author
                  </legend>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16
                    }}
                  >
                    <div style={twoCol}>
                      <TextField label="Name" defaultValue="Ben Merckx" />
                      <LinkField
                        label="Url"
                        value="https://github.com/benmerc…"
                      />
                    </div>
                    <LinkField
                      label="Avatar url"
                      value="https://avatars.githubusercontent.com/u/10584189?v=4&s=48"
                    />
                  </div>
                </fieldset>

                {/* Short introduction */}
                <TextField
                  label="Short introduction"
                  multiline
                  rows={3}
                  defaultValue="We're honored that Alinea CMS is part of the Vercel Open Source Program – Summer 2025 cohort. This recognition supports our mission to offer a clean, Git-based CMS built for Next.js."
                />

                {/* Body */}
                <TextField
                  label="Body"
                  multiline
                  rows={4}
                  defaultValue="We are pleased to share that Alinea CMS has been selected for the Vercel Open Source Program – Summer 2025 cohort. This program supports open source maintainers with the resources, infrastructure,"
                />
              </div>
            </TabPanel>

            <TabPanel id="metadata">
              <div style={formArea}>
                <p style={{color: 'var(--alinea-text-color-base)'}}>
                  Metadata fields will appear here.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default {title: 'Stories / Dashboard'}
