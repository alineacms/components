import { I18nProvider } from 'react-aria-components';
import { Button } from '../src/components/Button.tsx';
import { DatePicker } from '../src/components/DatePicker.tsx';
import { Stack } from './Stack.tsx';
import { useState } from 'react';

export const Example = () => {
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true); 
  };

  return (
    <I18nProvider locale="en-UK">
      <Stack align="normal">
        <DatePicker label="Event date" />

        <form onSubmit={handleSubmit}>
          <Stack align="normal">
            <DatePicker
              isRequired
              label="Event date with error if empty"
              errorMessage="date is required"
            />
            <Button type="submit">Submit</Button>
          </Stack>
        </form>

        <DatePicker label="Event date" description="Select a date for the event" />
      </Stack>
    </I18nProvider>
  );
};
