import {test, expect} from '@playwright/test'

test('Hiden dropdown', async({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // First we need to login into the application

    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()

    // we need to navigate to <PIM>

    await page.locator("//span[normalize-space()='PIM']").click()

    // <Job Title> - which is a hidden dropdown

    await page.locator("[write xpath of (Employee information section and follow Job title)]").click()

    // Waiting for options
    await page.waitForTimeout(3000)

    const options = await page.$$("//div[@role='listbox']//span")

    for(let option of options)
    {
        const jobTitle = await option.textContent()
        //console.log(jobTitle) // To capture all options inside dropdown
        if(jobTitle.includes('QA Engineer'))
        {
            await option.click()
            break;
        }


    }

    await page.waitForTimeout(5000)



})