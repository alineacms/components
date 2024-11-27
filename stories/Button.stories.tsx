import {Button} from '../src/Button'

export const Example = (args: any) => <Button {...args}>Press me</Button>

export const Intents = () => {
  return (
    <>
      <Button intent="primary">Primary</Button>
      <Button intent="secondary">Secondary</Button>
      <Button intent="danger">Danger</Button>
      <Button intent="warning">Warning</Button>
    </>
  )
}

Example.args = {
  onPress: () => alert('Hello world!')
}
