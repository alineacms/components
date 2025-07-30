import {Allotment} from 'allotment'
import 'allotment/dist/style.css'
import {Button} from '../components/Button.tsx'
import {IcRoundAccountCircle} from './icons/IcRoundAccountCircle.tsx'
import {IcRoundArchive} from './icons/IcRoundArchive.tsx'
import {IcRoundHistory} from './icons/IcRoundHistory.tsx'
import {IcRoundLanguage} from './icons/IcRoundLanguage.tsx'
import {IcRoundSearch} from './icons/IcRoundSearch.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'

export function Home() {
  return (
    <Allotment>
      <Allotment.Pane minSize={200} preferredSize={320}>
        <div>
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
        </div>
      </Allotment.Pane>
      <Allotment.Pane>
        <div>B</div>
      </Allotment.Pane>
      <Allotment.Pane minSize={200} preferredSize={320}>
        <div>C</div>
      </Allotment.Pane>
    </Allotment>
  )
}
