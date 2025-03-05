import {Label} from '../src/components/Label.tsx'
import {TextArea} from '../src/components/TextArea.tsx'
import {TextField} from '../src/components/TextField.tsx'
import {Stack} from './Stack.tsx'

export const Example = () => {
  return (
    <Stack>
      <Label
        label="Username"
        description="Enter your username"
        errorMessage="This username is taken"
      >
        <TextField />
      </Label>

      <Label label="Password">
        <TextField type="password" />
      </Label>

      <Label
        label="With Description"
        description="This is extra information"
        icon="ℹ️"
      >
        <TextField placeholder="Placeholder" />
      </Label>

      <Label
        label="With Description"
        description={
          <>
            This is an <strong>important</strong> description with a
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              link
            </a>
            . The intention is that this becomes a very long description so that
            we can test if the text breaks properly. This text will break when
            there is not enough space to display the text. This is a test to see
            if the text breaks. I need to come up with some more text and that
            is exhausting.
          </>
        }
        icon="ℹ️"
      >
        <TextField />
      </Label>

      <Label label="Disabled">
        <TextField isDisabled />
      </Label>

      <Label label="Read Only">
        <TextField isReadOnly defaultValue="This is read-only text" />
      </Label>
      <Label label="TextArea">
        <TextArea />
      </Label>

      <Label label="TextArea with Placeholder">
        <TextArea placeholder="Placeholder" />
      </Label>

      <Label label="TextArea readonly">
        <TextArea isReadOnly defaultValue="This is read-only text" />
      </Label>
    </Stack>
  )
}
