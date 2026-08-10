import {test, expect} from '@playwright/test'

test('Inner frames', async ({ page }) => {

    //HandleInnerFrames

    //naviagte to the browser
    await page.goto('https://ui.vision/demo/webtest/frames/')

    // there is two approach to handle frames: 1> Frame Objects(mostly prefered), 2> Frame locator

    const frame3 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3' })
    //frame3.locator("input[name='mytext3']").fill('Welcome')

    // Nested frames

    const child = await frame3.childFrames() // return array of frames
    await child[0].locator("(//div[@class='AB7Lab Id5V1'])[1]").check() // radio buttons inside nested frames

    await page.waitForTimeout(3000)


})