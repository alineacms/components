import {IcRoundRefresh} from 'alinea/ui/icons/IcRoundRefresh'
import {
  type CSSProperties,
  type HTMLAttributes,
  type PropsWithChildren,
  useState
} from 'react'
import {Stack} from '../stories/Stack.tsx'
import {IcRoundAccountCircle} from '../stories/icons/IcRoundAccountCircle.tsx'
import {IcRoundArchive} from '../stories/icons/IcRoundArchive.tsx'
import {IcRoundHistory} from '../stories/icons/IcRoundHistory.tsx'
import {IcRoundLanguage} from '../stories/icons/IcRoundLanguage.tsx'
import {IcRoundSearch} from '../stories/icons/IcRoundSearch.tsx'
import {IcRoundSettings} from '../stories/icons/IcRoundSettings.tsx'
import {Button} from './Button.tsx'
import {ProgressCircle} from './ProgressCircle.tsx'

const styleStack: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: 10
}

const HStack = (props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <Stack {...props} direction="row" wrap="wrap" align="flex-start" />
)

export function All() {
  return (
    <Stack>
      <HStack>
        <Button>Solid</Button>
        <Button isDisabled>Solid disabled</Button>
        <Button appearance="outline">Outline</Button>
        <Button appearance="outline" isDisabled>
          Outline disabled
        </Button>
      </HStack>
      <HStack>
        <Button intent="secondary">Solid secondary</Button>
        <Button appearance="outline" intent="secondary">
          Outline secondary
        </Button>
      </HStack>
      <HStack>
        <Button appearance="plain">Plain</Button>
      </HStack>
    </Stack>
  )
}

export function Appearance() {
  return (
    <Stack>
      <Button>Solid</Button>
      <Button appearance="outline">Outline</Button>
      <Button appearance="plain">Plain</Button>
    </Stack>
  )
}

export function Intents({isDisabled}: {isDisabled: boolean}) {
  return (
    <Stack>
      <Button isDisabled={isDisabled}>Primary</Button>
      <Button intent="secondary" isDisabled={isDisabled}>
        Secondary
      </Button>
      <Button intent="danger" isDisabled={isDisabled}>
        Danger
      </Button>
      <Button intent="warning" isDisabled={isDisabled}>
        Warning
      </Button>
    </Stack>
  )
}

Intents.args = {
  isDisabled: false
}

export function Sizes() {
  return (
    <Stack>
      <Button>Medium</Button>
      <Button>this is a medium button</Button>
      <Button data-size="large">Large</Button>
      <Button data-size="large">This is a large button</Button>
    </Stack>
  )
}

export function Icons() {
  const [isLoading, setLoading] = useState<boolean>(false)

  const handlePress = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4500)
  }

  return (
    <HStack>
      <Button>
        <IcRoundRefresh data-slot="icon" />
        With icon
      </Button>
      <Button size="square-petite">
        <IcRoundRefresh data-slot="icon" />
      </Button>
      <Button size="square-petite" appearance="outline">
        <IcRoundRefresh data-slot="icon" />
      </Button>
      <Button size="square-petite" appearance="plain">
        <IcRoundRefresh data-slot="icon" />
      </Button>
      <Button size="square-petite" appearance="plain">
        <IcRoundRefresh data-slot="icon" />
      </Button>
      <Button onPress={handlePress}>
        <>
          {isLoading ? (
            <ProgressCircle isIndeterminate aria-label="Refreshing..." />
          ) : (
            <IcRoundRefresh data-slot="icon" />
          )}
          {isLoading ? 'Refreshing...' : 'Refresh'}
        </>
      </Button>
      <Button onPress={handlePress}>
        <>
          <ProgressCircle isIndeterminate aria-label="Loading..." />
          Loading...
        </>
      </Button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          padding: 10,
          borderRadius: 6,
          border: '1px solid lightgray'
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
    </HStack>
  )
}

export default {
  title: 'Components / Button'
}
