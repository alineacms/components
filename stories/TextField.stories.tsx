import {TextField} from '../src/todo/TextField'

export const Example = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <TextField label="TextField" />
      <TextField label="TextField" isRequired />
    </div>
  )
}
