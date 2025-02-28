import {IcRoundKeyboardArrowDown} from '../src/icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowUp} from '../src/icons/IcRoundKeyboardArrowUp.tsx'
import {IcRoundKeyboardArrowLeft} from '../src/icons/IcRoundKeyboardArrowLeft.tsx'
import {IcRoundKeyboardArrowRight} from '../src/icons/IcRoundKeyboardArrowRight.tsx'
import {IcDocument} from '../src/icons/IcDocument.tsx'
import { Stack } from './Stack.tsx'

export const Example = (args: any) => (
  <>
    <Stack direction='row' align='center'>
      <IcRoundKeyboardArrowDown />
      <p>IcRoundKeyboardArrowDown</p>
    </Stack>
    <Stack direction='row' align='center'>
      <IcRoundKeyboardArrowUp />
      <p>IcRoundKeyboardArrowUp</p>
    </Stack>
      <Stack direction='row' align='center'>
      <IcRoundKeyboardArrowLeft />
      <p>IcRoundKeyboardArrowLeft</p>
    </Stack>
    <Stack direction='row' align='center'>
      <IcRoundKeyboardArrowRight />
      <p>IcRoundKeyboardArrowRight</p>
    </Stack>
    <Stack direction='row' align='center'>
      <IcDocument />
      <p>IcDocument</p>
    </Stack>
  </>
  

)
