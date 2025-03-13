import {Button} from 'react-aria-components'
import {Form} from '../src/components/Form.tsx'
import {TextField} from '../src/components/TextField.tsx'

export const Example = (args: any) => (
  <Form {...args}>
    <TextField label="email" name="email" type="email" isRequired />
    <Button type="submit">Submit</Button>
  </Form>
)
