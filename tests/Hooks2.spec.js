import {test, expect} from '@playwright/test'

// import { setupTest } from '../hooks/beforeEach';

// test.beforeEach(async ({ page }) => {
//     await setupTest(page);
// });

// separate block here - <page> -> not accepting page fixture directly

let page; // common variable

test.beforeEach(async ({ browser }) => {
  // If you need a page in a hook, create one from the browser fixture:
  // const page = await browser.newPage()

    // instaed of using multiple page fixture in every test, we're creating one own page 
    // fixture
    const page = await browser.newPage() // common page element/fixture
    
    await page.goto('https://www.demoblaze.com/index.html')
    
    // Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()


});

test.afterEach(async() =>{

    await page.locator('#logout2').click()
})



test('Home page', async () => { // page -> accepting page fixture


    // home page

    const products = page.locator('.hrefch')
    await expect(products).toHaveCount(9)

})

test('Add product to cart', async () => {

    // add product to the cart

    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click() // Select product
    await page.locator('//a[normalize-space()="Add to cart"]').click() // Click <add to cart> button

    page.on('dialog', async dialog=> {
        expect(dialog.message()).toContain('Product added')
        await dialog.accept()
    })

    await page.locator('//a[normalize-space()="Cart"]').click() // click on <cart> button

    const cart1 = page.locator('#tbodyid')
    await expect(cart1).toContainText('Samsung galaxy s6')
    
})

// *** See Hooks3.spec.js ***