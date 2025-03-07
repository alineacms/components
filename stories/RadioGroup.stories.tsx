import {Radio, RadioGroup} from '../src/components/RadioGroup.tsx'
import {Stack} from './Stack.tsx'

export const Example = () => {
  return (
    <Stack>
      <RadioGroup label="Favorite sport">
        <Radio value="soccer">Soccer</Radio>
        <Radio value="baseball">Baseball</Radio>
        <Radio value="basketball">Basketball</Radio>
      </RadioGroup>
      
      <RadioGroup label="Favorite codeurs member" description="Who is your favorite codeurs member?"> 
        <Radio value="ben">Ben</Radio>
        <Radio value="stijn">Stijn</Radio>
        <Radio value="brecht">Brecht</Radio>
        <Radio value="dimi">Dimi</Radio>
        <Radio value="david">David</Radio>
      </RadioGroup>

      <RadioGroup label="favorite juice" isDisabled description="What is your favorite juice?">
        <Radio value="apple">Apple</Radio>
        <Radio value="orange">Orange</Radio>
        <Radio value="grape">Grape</Radio>
      </RadioGroup>
    </Stack>
  )
}
