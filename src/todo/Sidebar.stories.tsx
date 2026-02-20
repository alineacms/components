import {Button} from '../components/Button.tsx'
import {SearchField} from '../components/SearchField.tsx'
import {Tree, TreeItem} from '../components/Tree.tsx'
import {IcOutlineDescription} from '../stories/icons/IcOutlineDescription.tsx'
import {IcRoundAddCircle} from '../stories/icons/IcRoundAddCircle.tsx'
import {IcRoundDescription} from '../stories/icons/IcRoundDescription.tsx'
import {IcRoundHome} from '../stories/icons/IcRoundHome.tsx'
import {Sidebar, SidebarBody, SidebarFooter, SidebarHeader} from './Sidebar.tsx'

export function Example() {
  return (
    <Sidebar style={{width: 250, height: '100vh'}}>
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
          <IcRoundAddCircle data-slot="icon" style={{width: 18, height: 18}} />
          Create new
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

export default {title: 'Todo / Sidebar'}
