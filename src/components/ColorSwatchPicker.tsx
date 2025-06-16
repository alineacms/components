import {
  ColorSwatchPicker as AriaColorSwatchPicker,
  ColorSwatchPickerItem as AriaColorSwatchPickerItem,
  type ColorSwatchPickerItemProps,
  type ColorSwatchPickerProps
} from 'react-aria-components'
import './ColorSwatchPicker.css'
import {ColorSwatch} from './ColorSwatch.tsx'

export function ColorSwatchPicker({
  children,
  ...props
}: ColorSwatchPickerProps) {
  return (
    <AriaColorSwatchPicker {...props} className="alinea-rac-ColorSwatchPicker">
      {children}
    </AriaColorSwatchPicker>
  )
}

export function ColorSwatchPickerItem(props: ColorSwatchPickerItemProps) {
  return (
    <AriaColorSwatchPickerItem
      {...props}
      className="alinea-rac-ColorSwatchPicker-item"
    >
      <ColorSwatch />
    </AriaColorSwatchPickerItem>
  )
}
