import '../src/theme.css'
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
import {Stack} from './Stack.tsx'

const addGlobalStyles = () => {
  const style = document.createElement('style')
  style.textContent = `
    p {
      color: var(--text-color);
    }
  `
  document.head.appendChild(style)
}

addGlobalStyles()

export const Example = (args: any) => (
  <div style={{columns: 2}}>
    <Stack direction="row" align="center">
      <IcRoundKeyboardArrowDown fill="var(--icon-color-plain)" />
      <p>IcRoundKeyboardArrowDown</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundKeyboardArrowUp fill="var(--icon-color-plain)" />
      <p>IcRoundKeyboardArrowUp</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundKeyboardArrowLeft fill="var(--icon-color-plain)" />
      <p>IcRoundKeyboardArrowLeft</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundKeyboardArrowRight fill="var(--icon-color-plain)" />
      <p>IcRoundKeyboardArrowRight</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundDocument fill="var(--icon-color-plain)" />
      <p>IcRoundDocument</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundShare fill="var(--icon-color-plain)" />
      <p>IcRoundShare</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundRemoveRedEye fill="var(--icon-color-plain)" />
      <p>IcRoundRemoveRedEye</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundMoreVert fill="var(--icon-color-plain)" />
      <p>IcRoundMoreVert</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundKeyboardTab fill="var(--icon-color-plain)" />
      <p>IcRoundKeyboardTab</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundArrowBack fill="var(--icon-color-plain)" />
      <p>IcRoundArrowBack</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundArrowForward fill="var(--icon-color-plain)" />
      <p>IcRoundArrowForward</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundRefresh fill="var(--icon-color-plain)" />
      <p>IcRoundRefresh</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundOpenInNew fill="var(--icon-color-plain)" />
      <p>IcRoundOpenInNew</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundLanguage fill="var(--icon-color-plain)" />
      <p>IcRoundLanguage</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundArticle fill="var(--icon-color-plain)" />
      <p>IcRoundArticle</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundContentCopy fill="var(--icon-color-plain)" />
      <p>IcRoundContentCopy</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundClose fill="var(--icon-color-plain)" />
      <p>IcRoundClose</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundCloudUpload fill="var(--icon-color-plain)" />
      <p>IcRoundCloudUpload</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundAccountCircle fill="var(--icon-color-plain)" />
      <p>IcRoundAccountCircle</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundBrightness fill="var(--icon-color-plain)" />
      <p>IcRoundBrightness</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundTextFields fill="var(--icon-color-plain)" />
      <p>IcRoundTextFields</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundSearch fill="var(--icon-color-plain)" />
      <p>IcRoundSearch</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundSettings fill="var(--icon-color-plain)" />
      <p>IcRoundSettings</p>
    </Stack>
    <Stack direction="row" align="center">
      <IcRoundHome fill="var(--icon-color-plain)" />
      <p>IcRoundHome</p>
    </Stack>
  </div>
)
