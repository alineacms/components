'use client'
import {Button} from '../src/components/Button.tsx'
import {TimeField} from '../src/components/TimeField.tsx'
import {Stack} from './Stack.tsx'

export const Example = () => {
  return (
    <Stack align="normal">
      <TimeField label="Event time" />

      <form
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <Stack align="normal">
          <TimeField
            isRequired
            label="Event time with error"
            errorMessage="time is required"
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>

      <TimeField label="Event time (24h mode)" hourCycle={24} />

      <TimeField
        label="Event time"
        hourCycle={24}
        description="(24h mode) with description"
      />
    </Stack>
  )
}
