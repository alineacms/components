import {TextField} from '../src/components/TextField.tsx'

export const Example = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <TextField label="TextField" />
      <TextField label="TextField" isRequired />
      <TextField label="TextField" placeholder="Placeholder" />
      <TextField label="TextField" description="TextField with description" />
    </div>
  )
}

export const Types = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <TextField type="email" label="Email" />
      <TextField type="password" label="Password" />
      <TextField type="tel" label="Phone" />
      <TextField type="text" label="Text" />
      <TextField type="url" label="Url" />
    </div>
  )
}
