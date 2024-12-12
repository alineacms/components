import {
  Button,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Modal
} from 'react-aria-components'
import {TextField} from '../src/components/TextField.tsx'
import {Dialog} from '../src/todo/Dialog.tsx'

export const Example = (args: any) => (
  <DialogTrigger>
    <Button>Sign up…</Button>
    <Modal>
      <Dialog {...args}>
        <form>
          <Heading slot="title">Sign up</Heading>
          <TextField autoFocus>
            <Label>First Name</Label>
            <Input />
          </TextField>
          <TextField>
            <Label>Last Name</Label>
            <Input />
          </TextField>
          <Button slot="close" style={{marginTop: 8}}>
            Submit
          </Button>
        </form>
      </Dialog>
    </Modal>
  </DialogTrigger>
)
