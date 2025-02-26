import {Label} from '../src/components/Label.tsx'
import {Stack} from './Stack.tsx'
export const Example = (args: any) => (
  <Stack>
    <Label label="test" description="testhelp">
      <input type="text" />
    </Label>
    <Label label="Username" errorMessage="Sorry, this username is taken">
      <input type="text" />
    </Label>

    <Label label="Username" errorMessage="Sorry, this username is taken">
      <b>Mijn</b> radio groep
    </Label>
  </Stack>
)
