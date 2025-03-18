import {Button} from '../src/components/Button.tsx'
import {DateField} from '../src/components/DateField.tsx'
import {Stack} from './Stack.tsx'

export const Example = () => {
  return (
    <Stack align="normal">
      <DateField label="Event date" />

      <form
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <Stack align="normal">
          <DateField
            isRequired
            label="Event date with error"
            errorMessage="Date is required"
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
      <DateField label="Event date" description="Select a date for the event" />
    </Stack>
  )
}
