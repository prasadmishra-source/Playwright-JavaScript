import {test, expect} from '@playwright/test'

test('Locators', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');

    //await page.locator('id=login2').click();
    //await page.click('id=login2');

    //multiple web elements
    const links = await page.$$('a');

    for(const link of links){
        const linktext = await link.textContent();
        console.log(linktext);
    }
})