import {
  Button,
  FieldError,
  Input,
  Label,
  TextField
} from 'react-aria-components'
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
