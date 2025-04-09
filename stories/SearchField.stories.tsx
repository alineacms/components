import {SearchField} from '../src/components/SearchField.tsx'
import {Stack} from './Stack.tsx'
export const Example = () => (
  <Stack>
    <SearchField label="Search" />
    <SearchField placeholder="Search..." />
    <SearchField label="Readonly" isReadOnly={true} />
    <SearchField label="Invalid" isInvalid={true} />
    <SearchField label="Required" isRequired={true} />
    <SearchField label="Disabled" isDisabled={true} />
  </Stack>
)
