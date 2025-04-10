import {SearchField} from '../src/components/SearchField.tsx'
import {Stack} from './Stack.tsx'
export const Example = () => (
  <Stack>
    <SearchField label="Search" />
    <SearchField aria-label="Search" />
    <SearchField aria-label="Search" placeholder="Search..." />
    <SearchField label="Search: isReadOnly" isReadOnly={true} />
    <SearchField
      errorMessage="Lorem ipsum"
      isInvalid={true}
      label="Search: isInvalid"
    />
    <SearchField label="Search: isRequired" isRequired={true} />
    <SearchField label="Search: isDisabled" isDisabled={true} />
  </Stack>
)
