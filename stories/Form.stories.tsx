import {Button, FieldError, Input, Label} from 'react-aria-components'
import {TextField} from '../src/components/TextField.tsx'
import {Form} from '../src/todo/Form.tsx'

export const Example = (args: any) => (
  <Form {...args}>
    <TextField name="email" type="email" isRequired>
      <Label>Email</Label>
      <Input />
      <FieldError />
    </TextField>
    <Button type="submit">Submit</Button>
  </Form>
)
