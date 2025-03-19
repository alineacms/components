import { DateRangePicker } from '../src/components/DateRangePicker.tsx'
import { Stack } from './Stack.tsx'

export const Variants = () => (
  <Stack gap={32}>
    <Example label="Default" />
    <Example label="With Description" description="Select a date range for your event" />
    <Example label="With Error" isRequired errorMessage="Date range is required" />
    <Example label="Disabled" isDisabled />
  </Stack>
)

interface ExampleProps {
  label: string
  description?: string
  errorMessage?: string
  isRequired?: boolean
  isDisabled?: boolean
}

function Example(props: ExampleProps) {
  return <DateRangePicker {...props} />
}
