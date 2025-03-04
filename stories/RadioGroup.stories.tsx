import { Radio, RadioGroup } from '../src/components/RadioGroup.tsx';
import { Stack } from './Stack.tsx';

export const Example = () => {
  return (
    <Stack>
      <RadioGroup
        label="Favorite sport"
        description="Choose one of the options below"
        errorMessage="This field is required"
      >
        <Radio value="soccer">Soccer</Radio>
        <Radio value="baseball">Baseball</Radio>
        <Radio value="basketball">Basketball</Radio>
      </RadioGroup>

      <RadioGroup label="Favorite codeurs member" description="Choose one of the options below">
        <Radio value="brecht">Brecht</Radio>
        <Radio value="dimi">Dimi</Radio>
        <Radio value="ben">Ben</Radio>
        <Radio value="stijn">Stijn</Radio>
        <Radio value="david">David</Radio>
      </RadioGroup>

      <RadioGroup label="Disabled group" description="This group is disabled" isDisabled>
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioGroup>
    </Stack>
  );
};

