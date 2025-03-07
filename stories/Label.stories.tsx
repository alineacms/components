import {TextArea} from '../src/components/TextArea.tsx'
import {TextField} from '../src/components/TextField.tsx'
import {Stack} from './Stack.tsx'

export const Example = () => {
  return (
    <Stack>
      <form action="submit">
        <TextField
          isRequired
          label="Username"
          description="Enter your username"
          id="username"
          errorMessage="This username is taken"
        />
        <button type="submit">Send</button>
      </form>
      <TextField label="Password" id="password" />

      <TextField
        label="With Description"
        description="This is extra information"
        icon="ℹ️"
        id="description"
        placeholder="Placeholder"
      />

      <TextField label="Disabled" isDisabled />
      <TextField label="Read Only" isReadOnly defaultValue="Read only text" />

      <TextArea label="TextArea" id="textarea" />

      <TextArea
        label="TextArea with Placeholder"
        id="placeholdertextarea"
        placeholder="Placeholder"
      />

      <TextArea
        label="TextArea Read Only"
        isReadOnly
        defaultValue="This is read-only text"
      />
    </Stack>
  )
}
