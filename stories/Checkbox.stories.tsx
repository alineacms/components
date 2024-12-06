import {Checkbox} from '../src/components/Checkbox'

export const Example = () => (
  <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
    <Checkbox>Unsubscribe</Checkbox>
    <Checkbox isInvalid>Unsubscribe</Checkbox>
    <Checkbox isDisabled>Unsubscribe</Checkbox>
  </div>
)
