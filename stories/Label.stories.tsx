import {Label} from '../src/components/Label.tsx'
import {TextField} from '../src/components/TextField.tsx'
import {Stack} from './Stack.tsx'
export const Example = (args: any) => (
  <Stack>
    <Label label="Title" description="testhelp">
      <TextField />
    </Label>
    <Label label="Username" errorMessage="Sorry, this username is taken">
      <TextField />
    </Label>
    <Label label="Username" errorMessage="Sorry, this username is taken">
      <TextField />
    </Label>
    <Label label="Username" errorMessage="Sorry, this username is taken">
      <TextField isDisabled />
    </Label>
  </Stack>
)
