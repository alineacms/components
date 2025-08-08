import {Disclosure} from './Disclosure.tsx'

export const Example = (args: any) => (
  <Disclosure {...args}>Details on managing your account</Disclosure>
)

Example.args = {
  title: 'Manage your account'
}

export default { title: 'Todo / Disclosure' }
