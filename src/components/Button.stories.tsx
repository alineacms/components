import {type HTMLAttributes, type PropsWithChildren, useState} from 'react'
import {Stack} from '../stories/Stack.tsx'
import {IcRoundArchive} from '../stories/icons/IcRoundArchive.tsx'
import {IcRoundClose} from '../stories/icons/IcRoundClose.tsx'
import {IcRoundHistory} from '../stories/icons/IcRoundHistory.tsx'
import {IcRoundLanguage} from '../stories/icons/IcRoundLanguage.tsx'
import {IcRoundRefresh} from '../stories/icons/IcRoundRefresh.tsx'
import {IcRoundSearch} from '../stories/icons/IcRoundSearch.tsx'
import {IcRoundSettings} from '../stories/icons/IcRoundSettings.tsx'
import {Button, type ButtonProps} from './Button.tsx'
import {ProgressCircle} from './ProgressCircle.tsx'

const HStack = (props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <Stack {...props} direction="row" wrap="wrap" align="flex-end" />
)

export function All() {
  return (
    <Stack>
      <HStack>
        <Button>Default</Button>
        <Button isDisabled>Default isDisabled</Button>
        <Button appearance="outline">Default Outline</Button>
        <Button appearance="outline" isDisabled>
          Default outline isDisabled
        </Button>
      </HStack>
      <HStack>
        <Button intent="primary">Primary</Button>
        <Button intent="primary" isDisabled>
          Primary isDisabled
        </Button>
        <Button intent="primary" appearance="outline">
          Primary outline
        </Button>
        <Button intent="primary" appearance="outline" isDisabled>
          Primary outline isDisabled
        </Button>
      </HStack>
      <HStack>
        <Button intent="secondary">Secondary</Button>
        <Button intent="secondary" isDisabled>
          Secondary isDisabled
        </Button>
        <Button intent="secondary" appearance="outline">
          Secondary outline
        </Button>
        <Button intent="secondary" appearance="outline" isDisabled>
          Secondary outline isDisabled
        </Button>
      </HStack>
      <HStack>
        <Button appearance="plain">Plain</Button>
        <Button appearance="plain" intent="primary">
          Plain primary
        </Button>
        <Button appearance="plain" intent="secondary">
          Plain secondary
        </Button>
      </HStack>
    </Stack>
  )
}

export function Appearance() {
  return (
    <Stack>
      <Button>Default</Button>
      <Button appearance="outline">Outline</Button>
      <Button appearance="plain">Plain</Button>
    </Stack>
  )
}

export function IconSize() {
  return (
    <Stack>
      <HStack>
        <Button size="icon">
          <IcRoundRefresh data-slot="icon" />
        </Button>
        <Button size="icon" appearance="outline">
          <IcRoundRefresh data-slot="icon" />
        </Button>
        <Button size="icon" appearance="plain">
          <IcRoundRefresh data-slot="icon" />
        </Button>
        <Button size="icon" isDisabled>
          <IcRoundRefresh data-slot="icon" />
        </Button>
        <Button size="icon" appearance="outline" isDisabled>
          <IcRoundRefresh data-slot="icon" />
        </Button>
      </HStack>
      <HStack>
        <Button size="icon" intent="primary">
          <IcRoundSearch data-slot="icon" />
        </Button>
        <Button size="icon" intent="primary" appearance="outline">
          <IcRoundSearch data-slot="icon" />
        </Button>
        <Button size="icon" intent="primary" appearance="plain">
          <IcRoundSearch data-slot="icon" />
        </Button>
        <Button size="icon" intent="primary" isDisabled>
          <IcRoundSearch data-slot="icon" />
        </Button>
        <Button size="icon" intent="primary" appearance="outline" isDisabled>
          <IcRoundSearch data-slot="icon" />
        </Button>
      </HStack>
      <HStack>
        <Button size="icon" intent="secondary">
          <IcRoundSearch data-slot="icon" />
        </Button>
        <Button size="icon" intent="secondary" appearance="outline">
          <IcRoundSearch data-slot="icon" />
        </Button>
        <Button size="icon" intent="secondary" appearance="plain">
          <IcRoundSearch data-slot="icon" />
        </Button>
        <Button size="icon" intent="secondary" isDisabled>
          <IcRoundSearch data-slot="icon" />
        </Button>
        <Button size="icon" intent="secondary" appearance="outline" isDisabled>
          <IcRoundSearch data-slot="icon" />
        </Button>
      </HStack>
      <HStack>
        <Button size="icon" intent="warning">
          <IcRoundClose data-slot="icon" />
        </Button>
        <Button size="icon" intent="warning" appearance="outline">
          <IcRoundClose data-slot="icon" />
        </Button>
        <Button size="icon" intent="danger">
          <IcRoundClose data-slot="icon" />
        </Button>
        <Button size="icon" intent="danger" appearance="outline">
          <IcRoundClose data-slot="icon" />
        </Button>
      </HStack>
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
      <Button size="square-petite" appearance="outline" intent="secondary">
        <IcRoundRefresh data-slot="icon" />
      </Button>
      <Button size="square-petite" appearance="plain" intent="secondary">
        <IcRoundRefresh data-slot="icon" />
      </Button>
      <Button isPending={isLoading} icon={IcRoundRefresh} onPress={handlePress}>
        {isLoading ? 'Refreshing...' : 'Refresh'}
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
        <Button size="square-petite" appearance="plain" intent="secondary">
          <IcRoundArchive data-slot="icon" />
        </Button>
        <Button size="square-petite" appearance="plain" intent="secondary">
          <IcRoundHistory data-slot="icon" />
        </Button>
        <Button size="square-petite" appearance="plain" intent="secondary">
          <IcRoundLanguage data-slot="icon" />
        </Button>
        <Button size="square-petite" appearance="plain" intent="secondary">
          <IcRoundSearch data-slot="icon" />
        </Button>
        <Button size="square-petite" appearance="plain" intent="secondary">
          <IcRoundSettings data-slot="icon" />
        </Button>
      </div>
    </HStack>
  )
}

export function Intents() {
  const intentsArray = [
    undefined,
    'primary',
    'secondary',
    'danger',
    'warning'
  ] as const
  const propsArray: {label: string; props?: ButtonProps}[] = [
    {label: ''},
    {props: {isDisabled: true}, label: 'isDisabled'},
    {props: {appearance: 'outline'}, label: 'Outline'},
    {
      props: {appearance: 'outline', isDisabled: true},
      label: 'Outline isDisabled'
    },
    {props: {appearance: 'plain'}, label: 'Plain'},
    {props: {appearance: 'plain', isDisabled: true}, label: 'Plain isDisabled'}
  ]

  return (
    <Stack>
      {intentsArray.map(intent => (
        <HStack key={intent}>
          {propsArray.map(({props, label}, index) => (
            <Button key={label} intent={intent} {...props}>
              {index === 0 && intent === undefined ? 'Default' : ''}
              {index === 0 && intent !== undefined
                ? intent.charAt(0).toUpperCase() + intent.slice(1)
                : label}
            </Button>
          ))}
        </HStack>
      ))}
    </Stack>
  )
}

export function Sizes() {
  return (
    <Stack>
      <HStack>
        <Button intent="primary" size="small">
          Small
        </Button>
        <Button intent="primary">Default</Button>
        <Button intent="primary" size="large">
          Large
        </Button>
      </HStack>
      <div style={{maxWidth: '150px'}}>
        <Button intent="primary" size="large">
          This is a large button with very long text
        </Button>
      </div>
    </Stack>
  )
}

export default {
  title: 'Components / Button'
}
