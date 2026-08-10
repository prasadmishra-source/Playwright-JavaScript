import {test, expect} from '@playwright/test'


test('Drag and Drop', async ({ page }) =>{

    // open our application
    await page.goto('https://www.dhtmlgoodies.com')

    // we have to identified source and target Element

    const rome = await page.locator('#box6')
    const italy = await page.locator('#box106')

    //*** Approach 1 ***

    // first we need to mouse hover on rome and we need to perform click action
    // then mouse hover on italy and realese the mouse action
    // we need to perform mouse hover along with mouse down and mouse up

    await rome.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()

    await page.waitForTimeout(3000)

    //*** Approach 2 ***

    // Direct method

    await rome.dragTo(Italy) //dragTo() - to drag and drop
    
    // WASHINGTON TO USA

    const washington = await page.locator('#box3')
    const usa = await page.locator('#box103')

    await washington.dragTo(usa)

    await page.waitForTimeout(3000)




})