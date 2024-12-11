import {Checkbox} from '../src/components/Checkbox.tsx'

export const Example = () => (
  <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
    <Checkbox>Checkbox</Checkbox>
    <Checkbox isSelected>Checkbox isSelected</Checkbox>
    <Checkbox isInvalid>Checkbox isInvalid</Checkbox>
    <Checkbox isDisabled>Checkbox isDisabled</Checkbox>
  </div>
)
