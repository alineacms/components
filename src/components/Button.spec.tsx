/** @jsxImportSource ../playwright */
import {expect, test} from '@playwright/experimental-ct-react'
import {Button} from './Button.tsx'

test.describe('Button', () => {
  test('renders label and appearance', async ({mount}) => {
    const component = await mount(<Button appearance="outline">Save</Button>)

    await expect(component).toContainText('Save')
    await expect(component).toHaveAttribute('data-appearance', 'outline')
  })

  test('fires onPress', async ({mount}) => {
    let pressed = false
    const component = await mount(
      <Button onPress={() => (pressed = true)}>Save</Button>
    )
    await component.click()
    expect(pressed).toBe(true)
  })
})
