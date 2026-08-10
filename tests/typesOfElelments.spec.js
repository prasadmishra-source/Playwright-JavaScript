import {test, expect} from '@playwright/test'

test ('handle inputbox', async({page}) => {
    await page.goto("https://qa-automation-practice.netlify.app/bugs-form")
    
    // *********input box**********

    // field is visible or not
    await expect(page.locator("#firstName")).toBeVisible()
    await page.locator("#firstName").fill("Samuel")
    await expect(page.locator("#firstName")).toHaveValue("Samuel")
    await expect(page.locator("#firstName")).toBeEnabled()
    await expect(page.locator("#firstName")).toBeEditable()



    await page.fill("#firstName", 'Samuel');
    // await page.locator("#lastName").fill("Winchester")
    // await page.locator("#phone").fill("+1-6434963435")

    // await page.pause()

    await page.waitForTimeout(5000); //pausing code


});