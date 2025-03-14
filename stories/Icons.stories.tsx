import {Icon} from '../src/components/Icon.tsx'
import {IcOutlineDescription} from '../src/icons/IcOutlineDescription.tsx'
import {IcRoundAccountCircle} from '../src/icons/IcRoundAccountCircle.tsx'
import {IcRoundAddCircle} from '../src/icons/IcRoundAddCircle.tsx'
import {IcRoundArchive} from '../src/icons/IcRoundArchive.tsx'
import {IcRoundArrowBack} from '../src/icons/IcRoundArrowBack.tsx'
import {IcRoundArrowForward} from '../src/icons/IcRoundArrowForward.tsx'
import {IcRoundBrightness} from '../src/icons/IcRoundBrightness.tsx'
import {IcRoundCancel} from '../src/icons/IcRoundCancel.tsx'
import {IcRoundCheck} from '../src/icons/IcRoundCheck.tsx'
import {IcRoundClose} from '../src/icons/IcRoundClose.tsx'
import {IcRoundCloudUpload} from '../src/icons/IcRoundCloudUpload.tsx'
import {IcRoundContentCopy} from '../src/icons/IcRoundContentCopy.tsx'
import {IcRoundDelete} from '../src/icons/IcRoundDelete.tsx'
import {IcRoundDescription} from '../src/icons/IcRoundDescription.tsx'
import {IcRoundEdit} from '../src/icons/IcRoundEdit.tsx'
import {IcRoundGridView} from '../src/icons/IcRoundGridView.tsx'
import {IcRoundHistory} from '../src/icons/IcRoundHistory.tsx'
import {IcRoundHome} from '../src/icons/IcRoundHome.tsx'
import {IcRoundInfo} from '../src/icons/IcRoundInfo.tsx'
import {IcRoundKeyboardArrowDown} from '../src/icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardArrowLeft} from '../src/icons/IcRoundKeyboardArrowLeft.tsx'
import {IcRoundKeyboardArrowRight} from '../src/icons/IcRoundKeyboardArrowRight.tsx'
import {IcRoundKeyboardArrowUp} from '../src/icons/IcRoundKeyboardArrowUp.tsx'
import {IcRoundKeyboardTab} from '../src/icons/IcRoundKeyboardTab.tsx'
import {IcRoundLanguage} from '../src/icons/IcRoundLanguage.tsx'
import {IcRoundLink} from '../src/icons/IcRoundLink.tsx'
import {IcRoundLogout} from '../src/icons/IcRoundLogout.tsx'
import {IcRoundMoreVert} from '../src/icons/IcRoundMoreVert.tsx'
import {IcRoundOpenInNew} from '../src/icons/IcRoundOpenInNew.tsx'
import {IcRoundPermMedia} from '../src/icons/IcRoundPermMedia.tsx'
import {IcRoundRefresh} from '../src/icons/IcRoundRefresh.tsx'
import {IcRoundSearch} from '../src/icons/IcRoundSearch.tsx'
import {IcRoundSettings} from '../src/icons/IcRoundSettings.tsx'
import {IcRoundShare} from '../src/icons/IcRoundShare.tsx'
import {IcRoundTextFields} from '../src/icons/IcRoundTextFields.tsx'
import {IcRoundTranslate} from '../src/icons/IcRoundTranslate.tsx'
import {IcRoundUnarchive} from '../src/icons/IcRoundUnarchive.tsx'
import {IcRoundUnfoldMore} from '../src/icons/IcRoundUnfoldMore.tsx'
import {IcRoundUnpublished} from '../src/icons/IcRoundUnpublished.tsx'
import {IcRoundUpload} from '../src/icons/IcRoundUpload.tsx'
import {IcRoundViewList} from '../src/icons/IcRoundViewList.tsx'
import {IcRoundViewModule} from '../src/icons/IcRoundViewModule.tsx'
import {IcRoundVisibility} from '../src/icons/IcRoundVisibility.tsx'
import {IcRoundVisibilityOff} from '../src/icons/IcRoundVisibilityOff.tsx'
import {Stack} from './Stack.tsx'

const icons = [
  {icon: IcOutlineDescription, name: 'IcOutlineDescription'},
  {icon: IcRoundAccountCircle, name: 'IcRoundAccountCircle'},
  {icon: IcRoundAddCircle, name: 'IcRoundAddCircle'},
  {icon: IcRoundArchive, name: 'IcRoundArchive'},
  {icon: IcRoundArrowBack, name: 'IcRoundArrowBack'},
  {icon: IcRoundArrowForward, name: 'IcRoundArrowForward'},
  {icon: IcRoundBrightness, name: 'IcRoundBrightness'},
  {icon: IcRoundCancel, name: 'IcRoundCancel'},
  {icon: IcRoundCheck, name: 'IcRoundCheck'},
  {icon: IcRoundClose, name: 'IcRoundClose'},
  {icon: IcRoundCloudUpload, name: 'IcRoundCloudUpload'},
  {icon: IcRoundContentCopy, name: 'IcRoundContentCopy'},
  {icon: IcRoundDelete, name: 'IcRoundDelete'},
  {icon: IcRoundDescription, name: 'IcRoundDescription'},
  {icon: IcRoundEdit, name: 'IcRoundEdit'},
  {icon: IcRoundGridView, name: 'IcRoundGridView'},
  {icon: IcRoundHistory, name: 'IcRoundHistory'},
  {icon: IcRoundHome, name: 'IcRoundHome'},
  {icon: IcRoundInfo, name: 'IcRoundInfo'},
  {icon: IcRoundKeyboardArrowDown, name: 'IcRoundKeyboardArrowDown'},
  {icon: IcRoundKeyboardArrowLeft, name: 'IcRoundKeyboardArrowLeft'},
  {icon: IcRoundKeyboardArrowRight, name: 'IcRoundKeyboardArrowRight'},
  {icon: IcRoundKeyboardArrowUp, name: 'IcRoundKeyboardArrowUp'},
  {icon: IcRoundKeyboardTab, name: 'IcRoundKeyboardTab'},
  {icon: IcRoundLanguage, name: 'IcRoundLanguage'},
  {icon: IcRoundLink, name: 'IcRoundLink'},
  {icon: IcRoundLogout, name: 'IcRoundLogout'},
  {icon: IcRoundMoreVert, name: 'IcRoundMoreVert'},
  {icon: IcRoundOpenInNew, name: 'IcRoundOpenInNew'},
  {icon: IcRoundPermMedia, name: 'IcRoundPermMedia'},
  {icon: IcRoundRefresh, name: 'IcRoundRefresh'},
  {icon: IcRoundSearch, name: 'IcRoundSearch'},
  {icon: IcRoundSettings, name: 'IcRoundSettings'},
  {icon: IcRoundShare, name: 'IcRoundShare'},
  {icon: IcRoundTextFields, name: 'IcRoundTextFields'},
  {icon: IcRoundTranslate, name: 'IcRoundTranslate'},
  {icon: IcRoundUnarchive, name: 'IcRoundUnarchive'},
  {icon: IcRoundUnfoldMore, name: 'IcRoundUnfoldMore'},
  {icon: IcRoundUnpublished, name: 'IcRoundUnpublished'},
  {icon: IcRoundUpload, name: 'IcRoundUpload'},
  {icon: IcRoundViewList, name: 'IcRoundViewList'},
  {icon: IcRoundViewModule, name: 'IcRoundViewModule'},
  {icon: IcRoundVisibility, name: 'IcRoundVisibility'},
  {icon: IcRoundVisibilityOff, name: 'IcRoundVisibilityOff'}
]

export const Example = () => (
  <div style={{columns: 3}}>
    {icons.map(({icon, name}) => (
      <Stack direction="row" align="center" key={name}>
        <Icon icon={icon} />
        <p>{name}</p>
      </Stack>
    ))}
  </div>
)
