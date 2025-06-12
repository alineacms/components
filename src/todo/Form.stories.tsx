import {Button} from 'react-aria-components'
import {TextField} from '../components/TextField.tsx'
import {Form} from './Form.tsx'

export const Example = (args: any) => (
  <Form {...args}>
    <TextField label="email" name="email" type="email" isRequired />
    <Button type="submit">Submit</Button>
  </Form>
)

export default { title: 'Todo / Form' }
