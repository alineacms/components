import {Button} from '../src/components/Button.tsx'

export const Appearance = () => {
  return (
    <div style={{display: 'flex', alignItems: 'flex-start', gap: 10}}>
      <Button>Solid</Button>
      <Button appearance="outline">Outline</Button>
      <Button appearance="plain">Plain</Button>
    </div>
  )
}

export const Intents = ({isDisabled}: {isDisabled: boolean}) => {
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

export const Sizes = () => {
  return (
    <div style={{display: 'flex', alignItems: 'flex-start', gap: 10}}>
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </div>
  )
}
