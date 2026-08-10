import {test, expect} from '@playwright/test'

test('Key Board actions', async({ page }) => {

    // navigate to the application

    await page.goto('https://gotranscript.com/text-compare')

    //await page.locator('name="text1"').fill("welcome to automation")

    // entering our input

    await page.type('[name="text1"]', 'welcome to automation')

    // Ctrl + A = Select all text

        //three methods are avilable - down, press, and up
    
    //await page.keyboard.press('Ctrl+KeyA') // when we need to press combination of two keys we should use 'press()'

        // or

    await page.keyboard.press('Control+A') // when we need to press combination of two keys we should use 'press()'

    // Ctrl + C = copy the text

    await page.keyboard.press('Control+C') 

    // TAB key - moving to other table with cruser

    await page.keyboard.down('Tab') // when we need to press single key
    await page.keyboard.up('Tab') // relase action - which is mandatory whenever we're dealing with single Key

    // Ctrl + V - paste the copied text

    await page.keyboard.press('Control+V') 
})