import {Allotment} from 'allotment'
import 'allotment/dist/style.css'
import {Button} from '../components/Button.tsx'
import {Example as TextExamples} from '../components/TextField.stories.tsx'
import {DragNDrop} from '../components/Tree.stories.tsx'
import {IcRoundAccountCircle} from './icons/IcRoundAccountCircle.tsx'
import {IcRoundArchive} from './icons/IcRoundArchive.tsx'
import {IcRoundHistory} from './icons/IcRoundHistory.tsx'
import {IcRoundLanguage} from './icons/IcRoundLanguage.tsx'
import {IcRoundSearch} from './icons/IcRoundSearch.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'

export function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10
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
        <Button data-size="square-petite" appearance="plain">
          <IcRoundSettings data-slot="icon" />
        </Button>
      </div>

      <div style={{flexGrow: 1, height: '100%'}}>
        <Allotment>
          <Allotment.Pane minSize={200} preferredSize={320} snap>
            <div
              style={{display: 'flex', flexDirection: 'column', height: '100%'}}
            >
              <div style={{flexGrow: 1, padding: '0 10px'}}>
                <DragNDrop />
              </div>
              <div style={{marginLeft: 'auto'}}>
                <Button intent="secondary">Create new</Button>
              </div>
            </div>
          </Allotment.Pane>
          <Allotment.Pane>
            <div>
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
