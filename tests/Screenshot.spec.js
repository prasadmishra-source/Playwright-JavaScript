import {test, expect} from '@playwright/test'

test('page screenshot', async({ page }) => {

    await page.goto('https://demo.nopcommerce.com/')
    // await page.screenshot({path: 'shots'+'Homepage.png'}) // you have to mention custom path 
    // location
    await page.screenshot({path: 'shots/'+Date.now()+'Homepage.png'}) // if you want screenshot 
    // with date and time stamp
    // await page.screenshot({path: 'Homepage.png'}) // by default screenshot folder create
});


test('Full page screenshot', async({ page }) => {

    await page.goto('https://playwright.dev/docs/screenshots')
    await page.screenshot({path: 'shots/'+Date.now()+'FullPage.png', fullPage:true})

});


test.only('Element screenshot', async({ page }) => {

    await page.goto('https://playwright.dev/docs/screenshots')
    const element = page.getByRole('heading', { name: 'Playwright Test' });
    await element.screenshot({path: 'shots/'+Date.now()+'Element.png'})
});