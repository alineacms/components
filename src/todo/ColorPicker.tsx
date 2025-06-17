import {
  ColorPicker as AriaColorPicker,
  type ColorPickerProps as AriaColorPickerProps,
  Button,
  Dialog,
  DialogTrigger,
  Popover
} from 'react-aria-components'
import {ColorSwatch} from '../components/ColorSwatch.tsx'
import {MyColorArea} from './ColorArea.tsx'
import {MyColorField} from './ColorField.tsx'
import {MyColorSlider} from './ColorSlider.tsx'

import './ColorPicker.css'

export interface ColorPickerProps extends AriaColorPickerProps {
  label?: string
  children?: React.ReactNode
}

export function ColorPicker({label, children, ...props}: ColorPickerProps) {
  return (
    <AriaColorPicker {...props}>
      <DialogTrigger>
        <Button className="color-picker">
          <ColorSwatch />
          <span>{label}</span>
        </Button>
        <Popover placement="bottom start">
          <Dialog className="color-picker-dialog">
            {children || (
              <>
                <MyColorArea
                  colorSpace="hsb"
                  xChannel="saturation"
                  yChannel="brightness"
                />
                <MyColorSlider colorSpace="hsb" channel="hue" />
                <MyColorField label="Hex" />
              </>
            )}
          </Dialog>
        </Popover>
      </DialogTrigger>
    </AriaColorPicker>
  )
}
