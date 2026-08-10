import {test, expect} from '@playwright/test'

test('Handle RadioButtons', async({page})=> {
    await page.goto('https://qa-automation-practice.netlify.app/radiobuttons')

    await page.getByLabel("Radio button 2").check()
    // or
    // await page.check("#checkbox2")


    // Checkbox is Checked or not
    //await expect (await page.locator("#checkbox2")).toBeChecked()
    await expect(page.getByLabel("Radio button 2")).toBeChecked()
    // Returns True or False 
    await expect(await page.getByLabel("Radio button 2").isChecked()).toBeTruthy()

    // Negative scenario - checkbox shouldn't be Selected
    //await expect(await page.locator("#checkbox1").isChecked()).toBeFalsy()
    await expect(await page.getByLabel("Radio button 1").isChecked()).toBeFalsy()
    

    await page.waitForTimeout(5000);
});