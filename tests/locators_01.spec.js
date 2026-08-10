//const {test, except} = require('@playwright/test')

import { test, expect } from '@playwright/test'

test('Locators', async ({page})=> {

    await page.goto("https://demoblaze.com/")
    
    //click on login button - property
    
    //await page.locator('#login2').click();
    await page.click('#login2')
    
    await page.fill('#loginusername', 'pavalol')
    //await page.type('#loginusername')
    await page.fill('#loginpassword', 'test@123')
    //await page.type('#loginpassword')

    //click on login button

    await page.locator('xpath=(//*[text()="Log in"])[2]').click()

    //verify logout visible or not
    const logoutlink = page.locator('#logout2')
    await expect(logoutlink).toBeVisible()

    await page.close()








})