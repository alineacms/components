import {Button} from '../src/components/Button'

export const Intents = () => {
  return (
    <div style={{display: 'flex', gap: 10}}>
      <Button intent="primary">Primary</Button>
      <Button intent="secondary">Secondary</Button>
      <Button intent="danger">Danger</Button>
      <Button intent="warning">Warning</Button>
    </div>
  )
}

export const Sizes = () => {
  return (
    <div style={{display: 'flex', alignItems: 'flex-start', gap: 10}}>
      <Button size="extra-small">Extra Small</Button>
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </div>
  )
}
