import {getLocalTimeZone, today} from '@internationalized/date'
import {useState} from 'react'
import type {DateRange} from 'react-aria-components'
import {DateRangePicker} from '../src/components/DateRangePicker.tsx'
import {Stack} from './Stack.tsx'

export const Basic = () => {
  return (
    <Stack gap={32}>
      <DateRangePicker label="Default" />
      <DateRangePicker
        label="With Description"
        description="Select a date range for your event"
      />
      <DateRangePicker
        label="minValue (today)"
        minValue={today(getLocalTimeZone())}
      />
      <DateRangePicker
        label="With Error"
        isRequired
        errorMessage="Date range is required"
      />
      <DateRangePicker label="Disabled" isDisabled />
      <DateRangePicker label="Disabled" isDisabled />
    </Stack>
  )
}

export const CustomValidation = () => {
  const [range, setRange] = useState<DateRange | null>({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({weeks: 1})
  })
  const isInvalid = range?.end && range.end.compare(range.start) > 7
  const errorMessage =
    range?.end && range.end.compare(range.start) > 7
      ? 'Maximum booking duration is 1 week.'
      : undefined

  return (
    <DateRangePicker
      label="Custom validation (1 week max)"
      value={range}
      onChange={setRange}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
    />
  )
}
