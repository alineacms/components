import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label
} from 'react-aria-components'
import {TextField} from '../src/components/TextField.tsx'
import {Modal} from '../src/todo/Modal.tsx'

export const Example = (args: any) => (
  <DialogTrigger>
    <Button>Sign up…</Button>
    <Modal {...args}>
      <Dialog>
        <form>
          <Heading slot="title">Sign up</Heading>
          <TextField autoFocus>
            <Label>First Name:</Label>
            <Input />
          </TextField>
          <TextField>
            <Label>Last Name:</Label>
            <Input />
          </TextField>
          <Button slot="close">Submit</Button>
        </form>
      </Dialog>
    </Modal>
  </DialogTrigger>
)
