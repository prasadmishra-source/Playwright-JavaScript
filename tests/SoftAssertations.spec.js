import {test, expect} from '@playwright/test'

test ('Soft Assert', async ({page}) => {

    await page.goto("https://demoblaze.com/")
    
    //hard assertations

    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL("https://demoblaze.com/")
    await expect.soft(page.locator("a[class='navbar-brand']")).toBeVisible()

    

});