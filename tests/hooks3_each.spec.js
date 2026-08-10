import {test, expect} from '@playwright/test'

let page; // common variable

test.describe.serial('Demoblaze authenticated flows', () => {

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('https://www.demoblaze.com/index.html')

    // Login once for all tests in this describe block
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()
  })

  test.afterEach(async () => {
    await page.locator('#logout2').click()
    await page.close()
  })

  test('Home page', async () => {
    const products = page.locator('.hrefch')
    await expect(products).toHaveCount(9)
  })

  test('Add product to cart', async () => {
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click()

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Product added')
      await dialog.accept()
    })

    await page.locator('//a[normalize-space()="Cart"]').click()

    const cart1 = page.locator('#tbodyid')
    await expect(cart1).toContainText('Samsung galaxy s6')
  })

})