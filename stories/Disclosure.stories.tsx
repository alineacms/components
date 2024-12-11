import {Disclosure} from '../src/todo/Disclosure.tsx'

export const Example = (args: any) => (
  <Disclosure {...args}>Details on managing your account</Disclosure>
)

Example.args = {
  title: 'Manage your account'
}
