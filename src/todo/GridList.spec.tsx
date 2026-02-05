import {expect, test} from '@playwright/experimental-ct-react'
import {GridListWithInput} from './GridList.test.tsx'

test.describe('GridList', () => {
  test('selecting text in input should not start drag', async ({
    mount,
    page
  }) => {
    const component = await mount(<GridListWithInput />)
    const input = component.getByLabel('Text field').first()
    await input.click()
    await input.fill('Hello world')

    const box = await input.boundingBox()
    expect(box).not.toBeNull()
    if (!box) return

    const item = component.locator('.alinea-rac-ListItem').first()

    await page.mouse.move(box.x + 6, box.y + box.height / 2)
    await page.mouse.down()
    await page.mouse.move(box.x + box.width - 6, box.y + box.height / 2)

    await expect(item).not.toHaveAttribute('data-dragging', /.+/)
    await page.mouse.up()
  })

  test('arrow keys should work in input for cursor movement', async ({
    mount
  }) => {
    const component = await mount(<GridListWithInput />)
    const input = component.getByLabel('Text field').first()
    await input.click()
    await input.fill('Hello world')

    // Move cursor to end, then use left arrow to move back
    await input.press('End')
    await input.press('ArrowLeft')
    await input.press('ArrowLeft')
    await input.press('ArrowLeft')
    await input.press('ArrowLeft')
    await input.press('ArrowLeft')
    // Type a character at the cursor position
    await input.pressSequentially('X')

    // Should have inserted X before "world"
    await expect(input).toHaveValue('Hello Xworld')
  })
})
