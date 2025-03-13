import {Icon} from '../src/components/Icon.tsx'
import {IcRoundAccountCircle} from '../src/icons/IcRoundAccountCircle.tsx'
import {IcRoundArrowBack} from '../src/icons/IcRoundArrowBack.tsx'
import {IcRoundArrowForward} from '../src/icons/IcRoundArrowForward.tsx'
import {IcRoundArticle} from '../src/icons/IcRoundArticle.tsx'
import {IcRoundBrightness} from '../src/icons/IcRoundBrightness.tsx'
import {IcRoundClose} from '../src/icons/IcRoundClose.tsx'
import {IcRoundCloudUpload} from '../src/icons/IcRoundCloudUpload.tsx'
import {IcRoundContentCopy} from '../src/icons/IcRoundContentCopy.tsx'
import {IcRoundDocument} from '../src/icons/IcRoundDocument.tsx'
import {IcRoundHome} from '../src/icons/IcRoundHome.tsx'
import {IcRoundKeyboardArrowDown} from '../src/icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowLeft} from '../src/icons/IcRoundKeyboardArrowLeft.tsx'
import {IcRoundKeyboardArrowRight} from '../src/icons/IcRoundKeyboardArrowRight.tsx'
import {IcRoundKeyboardArrowUp} from '../src/icons/IcRoundKeyboardArrowUp.tsx'
import {IcRoundKeyboardTab} from '../src/icons/IcRoundKeyboardTab.tsx'
import {IcRoundLanguage} from '../src/icons/IcRoundLanguage.tsx'
import {IcRoundMoreVert} from '../src/icons/IcRoundMoreVert.tsx'
import {IcRoundOpenInNew} from '../src/icons/IcRoundOpenInNew.tsx'
import {IcRoundRefresh} from '../src/icons/IcRoundRefresh.tsx'
import {IcRoundRemoveRedEye} from '../src/icons/IcRoundRemoveRedEye.tsx'
import {IcRoundSearch} from '../src/icons/IcRoundSearch.tsx'
import {IcRoundSettings} from '../src/icons/IcRoundSettings.tsx'
import {IcRoundShare} from '../src/icons/IcRoundShare.tsx'
import {IcRoundTextFields} from '../src/icons/IcRoundTextFields.tsx'
import {IcRoundCheck} from '../src/icons/IcRoundCheck.tsx'
import {Stack} from './Stack.tsx'

export const Example = () => (
  <div style={{columns: 2}}>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundKeyboardArrowDown} />
      <p>IcRoundKeyboardArrowDown</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundKeyboardArrowUp} />
      <p>IcRoundKeyboardArrowUp</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundKeyboardArrowLeft} />
      <p>IcRoundKeyboardArrowLeft</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundKeyboardArrowRight} />
      <p>IcRoundKeyboardArrowRight</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundDocument} />
      <p>IcRoundDocument</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundShare} />
      <p>IcRoundShare</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundRemoveRedEye} />
      <p>IcRoundRemoveRedEye</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundMoreVert} />
      <p>IcRoundMoreVert</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundKeyboardTab} />
      <p>IcRoundKeyboardTab</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundArrowBack} />
      <p>IcRoundArrowBack</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundArrowForward} />
      <p>IcRoundArrowForward</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundRefresh} />
      <p>IcRoundRefresh</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundOpenInNew} />
      <p>IcRoundOpenInNew</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundLanguage} />
      <p>IcRoundLanguage</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundArticle} />
      <p>IcRoundArticle</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundContentCopy} />
      <p>IcRoundContentCopy</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundClose} />
      <p>IcRoundClose</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundCloudUpload} />
      <p>IcRoundCloudUpload</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundAccountCircle} />
      <p>IcRoundAccountCircle</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundBrightness} />
      <p>IcRoundBrightness</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundTextFields} />
      <p>IcRoundTextFields</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundSearch} />
      <p>IcRoundSearch</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundSettings} />
      <p>IcRoundSettings</p>
    </Stack>
    <Stack direction="row" align="center">
      <Icon icon={IcRoundHome} />
      <p>IcRoundHome</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundCheck fill="var(--icon-color-plain)" />
      <p>IcRoundCheck</p>
    </Stack>
  </div>
)
