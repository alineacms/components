import {DatePicker, type DatePickerProps} from '../src/components/DatePicker.tsx'
import {Stack} from './Stack.tsx'
import {parseDate} from '@internationalized/date'
import type {Meta, StoryObj} from '@storybook/react'

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <Stack align="normal" style={{padding: '20px', width: '300px'}}>
        <Story />
      </Stack>
    )
  ]
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Event date'
  }
}

export const WithValue: Story = {
  args: {
    label: 'Event date with value',
    defaultValue: parseDate('2024-07-15')
  }
}

export const Disabled: Story = {
  args: {
    label: 'Event date disabled',
    isDisabled: true,
    defaultValue: parseDate('2024-07-15')
  }
}

export const WithDescription: Story = {
  args: {
    label: 'Event date with description',
    description: 'Please select a date for the event.'
  }
}

export const Invalid: Story = {
  args: {
    label: 'Event date invalid',
    isInvalid: true,
    defaultValue: parseDate('2024-07-15')
  }
}

export const WithErrorMessage: Story = {
  args: {
    label: 'Event date with error',
    errorMessage: 'This date is not available.',
    defaultValue: parseDate('2024-07-15') // An error message should imply isInvalid
  }
}

// Story to demonstrate interaction with a form and required validation
export const InForm: Story = {
  render: args => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      alert('Form submitted! Check console for date picker value.')
      // In a real app, you'd get the value using a ref or form state management
    }
    return (
      <form onSubmit={handleSubmit}>
        <Stack align="normal" gap={8}>
          <DatePicker {...args} />
          <button type="submit">Submit</button>
        </Stack>
      </form>
    )
  },
  args: {
    label: 'Event date (Required in Form)',
    isRequired: true
  }
}
