import {test, expect} from '@playwright/test'

test('handle Frames or I frames', async({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    // ***Frames can be handle by frameLocator or <url> of frame*** //

    // toatl frames available - page.frames()

    const allframes = await page.frames()
    console.log("Number of frames: ", allframes.length)

    // // Approach 1: Using name of URL
    // // Or Uing 'name' await page.frame('name') // if name is present
    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // if (frame1) {
    //     await frame1.fill("[name='mytext1']",'Hello')
    // }


    // await page.waitForTimeout(3000)

    // Approach 2 = using frame locatoe

    await page.frameLocator("frame[src='frame_!.ht]")

    await page.waitforTimeout(3000)

})