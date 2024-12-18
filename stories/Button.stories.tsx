'use client'

import {IcRoundRefresh} from 'alinea/ui/icons/IcRoundRefresh'
import {type CSSProperties, useState} from 'react'
import {Button} from '../src/components/Button.tsx'
import {ProgressCircle} from '../src/components/ProgressCircle.tsx'

const styleStack: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: 10
}

export function All() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }}
    >
      <div style={styleStack}>
        <Button>Solid</Button>
        <Button isDisabled>Solid disabled</Button>
        <Button appearance="outline">Outline</Button>
        <Button appearance="outline" isDisabled>
          Outline disabled
        </Button>
      </div>
      <div style={styleStack}>
        <Button intent="secondary">Solid secondary</Button>
        <Button appearance="outline" intent="secondary">
          Outline secondary
        </Button>
      </div>
      <div style={styleStack}>
        <Button appearance="plain">Plain</Button>
      </div>
    </div>
  )
}

export function Appearance() {
  return (
    <div style={{display: 'flex', alignItems: 'flex-start', gap: 10}}>
      <Button>Solid</Button>
      <Button appearance="outline">Outline</Button>
      <Button appearance="plain">Plain</Button>
    </div>
  )
}

export function Intents({isDisabled}: {isDisabled: boolean}) {
  return (
    <div style={{display: 'flex', gap: 10}}>
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
    </div>
  )
}

Intents.args = {
  isDisabled: false
}

export function Sizes() {
  return (
    <div style={{display: 'flex', alignItems: 'flex-start', gap: 10}}>
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </div>
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
    <div style={styleStack}>
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
    </div>
  )
}
