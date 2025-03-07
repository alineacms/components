import {useState} from 'react'
import {Icon} from '../src/components/Icon.tsx'
import {TextField} from '../src/components/TextField.tsx'
import {IcRoundCloudUpload} from '../src/icons/IcRoundCloudUpload.tsx'
import {Stack} from './Stack.tsx'

export const Example = () => {
  const [text, setText] = useState('Example text')
  return (
    <Stack align="normal">
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
      <TextField label="Password" />

      <TextField
        label="With Description"
        description="This is extra information"
        icon={<Icon icon={IcRoundCloudUpload} />}
        placeholder="Placeholder"
        id="description"
      />

      <TextField
        label="With Description"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac purus nec mi laoreet tempor. Duis eget lorem facilisis, hendrerit turpis a, congue purus. Mauris pulvinar sapien vestibulum justo sodales, ut cursus magna dictum. In at molestie odio. Donec ut leo vitae nulla euismod facilisis. Quisque pellentesque sodales mi eu lacinia. Suspendisse a nisi volutpat, posuere mauris quis, porttitor nulla. Phasellus quis dapibus diam, accumsan dapibus ipsum."
        icon="ℹ️"
        placeholder="Placeholder"
      />

      <TextField label="Disabled" isDisabled />
      <TextField label="Read Only" isReadOnly defaultValue="Read only text" />

      <TextField
        multiline
        label="Multiline with auto size"
        value={text}
        onChange={setText}
      />
    </Stack>
  )
}
