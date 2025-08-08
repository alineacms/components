import {Allotment} from 'allotment'
import 'allotment/dist/style.css'
import {MenuSection} from 'react-aria-components'
import {Button} from '../components/Button.tsx'
import {Icon} from '../components/Icon.tsx'
import {Menu, MenuHeader, MenuItem} from '../components/Menu.tsx'
import {Example as TextExamples} from '../components/TextField.stories.tsx'
import {DragNDrop} from '../components/Tree.stories.tsx'
import {IcRoundAccountCircle} from './icons/IcRoundAccountCircle.tsx'
import {IcRoundAddCircle} from './icons/IcRoundAddCircle.tsx'
import {IcRoundArchive} from './icons/IcRoundArchive.tsx'
import {IcRoundBrightness} from './icons/IcRoundBrightness.tsx'
import {IcRoundHistory} from './icons/IcRoundHistory.tsx'
import {IcRoundLanguage} from './icons/IcRoundLanguage.tsx'
import {IcRoundLogout} from './icons/IcRoundLogout.tsx'
import {IcRoundSearch} from './icons/IcRoundSearch.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'

export function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          padding: 10
        }}
      >
        <Button data-size="square-petite" appearance="active">
          <IcRoundAccountCircle data-slot="icon" />
        </Button>
        <Button data-size="square-petite" appearance="plain">
          <IcRoundArchive data-slot="icon" />
        </Button>
        <Button data-size="square-petite" appearance="plain">
          <IcRoundHistory data-slot="icon" />
        </Button>
        <Button data-size="square-petite" appearance="plain">
          <IcRoundLanguage data-slot="icon" />
        </Button>
        <Button data-size="square-petite" appearance="plain">
          <IcRoundSearch data-slot="icon" />
        </Button>
        <div style={{marginTop: 'auto'}}>
          <Menu
            label={
              <Button data-size="square-petite" appearance="plain">
                <IcRoundSettings data-slot="icon" />
              </Button>
            }
          >
            <MenuSection>
              <MenuHeader>My username</MenuHeader>
              <Menu
                selectionMode="single"
                selectedKeys={['system']}
                label={
                  <MenuItem>
                    <Icon icon={IcRoundBrightness} /> Theme
                  </MenuItem>
                }
              >
                <MenuItem id="system">System</MenuItem>
                <MenuItem id="light">Light</MenuItem>
                <MenuItem id="dark">Dark</MenuItem>
              </Menu>
              <MenuItem>
                <Icon icon={IcRoundLogout} /> Logout
              </MenuItem>
            </MenuSection>
          </Menu>
        </div>
      </div>

      <div style={{flexGrow: 1, height: '100%'}}>
        <Allotment>
          <Allotment.Pane minSize={200} preferredSize={320} snap>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: '10px 10px 10px 0'
              }}
            >
              <div style={{flexGrow: 1}}>
                <DragNDrop />
              </div>
              <div style={{marginLeft: 'auto'}}>
                <Button appearance="plain">
                  <Icon icon={IcRoundAddCircle} data-slot="icon" />
                  Create new
                </Button>
              </div>
            </div>
          </Allotment.Pane>
          <Allotment.Pane>
            <div style={{padding: 10, height: '100%'}}>
              <TextExamples />
            </div>
          </Allotment.Pane>
          {/*<Allotment.Pane minSize={200} preferredSize={320}>
            <div>Preview</div>
          </Allotment.Pane>*/}
        </Allotment>
      </div>
    </div>
  )
}
