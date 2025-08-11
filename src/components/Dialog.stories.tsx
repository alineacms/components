import {DialogTrigger, Heading} from 'react-aria-components'
import {Form} from '../todo/Form.tsx'
import {Button} from './Button.tsx'
import {Dialog} from './Dialog.tsx'
import {Modal} from './Modal.tsx'
import {TextField} from './TextField.tsx'

export const Example = () => (
  <DialogTrigger>
    <Button>Sign up…</Button>
    <Modal>
      <Dialog>
        <Form>
          <Heading slot="title">Sign up</Heading>
          <TextField name="fname" isRequired label="First Name" autoFocus />
          <TextField name="lname" isRequired label="Last Name" />
          <Button slot="close" style={{marginTop: 8}}>
            Submit
          </Button>
        </Form>
      </Dialog>
    </Modal>
  </DialogTrigger>
)

export default {
  title: 'Components / Dialog'
}
