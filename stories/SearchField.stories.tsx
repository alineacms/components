import {SearchField} from '../src/components/SearchField.tsx'
import {Stack} from './Stack.tsx'
export const Example = () => (
  <Stack>
    <SearchField label="Search" />
    <SearchField placeholder="Search..." />
    <SearchField label="Search: isReadOnly" isReadOnly={true} />
    <SearchField label="Search: isInvalid" isInvalid={true} />
    <SearchField label="Search: isRequired" isRequired={true} />
    <SearchField label="Search: isDisabled" isDisabled={true} />
  </Stack>
)
