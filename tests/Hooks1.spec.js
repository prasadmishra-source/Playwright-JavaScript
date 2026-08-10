import {test, expect} from '@playwright/test'

test('Home page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')

    // login

    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()

    // home page

    const products = page.locator('.hrefch')
    await expect(products).toHaveCount(9)

    // logout

    await page.locator('#logout2').click()

})

test('Add product to cart', async ({ page }) => {

    // login
    await page.goto('https://www.demoblaze.com/index.html')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()

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



    // logout
    await page.locator('#logout2').click()
    
})