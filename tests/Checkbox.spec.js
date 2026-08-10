import {test, expect} from '@playwright/test'

test('handling checkbox', async({page}) => {
    await page.goto('https://qa-automation-practice.netlify.app/checkboxes')

    //single checkbox
    await page.locator("#checkbox1").check()

    await expect(page.locator("#checkbox1")).toBeChecked()
    await expect(await page.locator("#checkbox1").isChecked()).toBeTruthy()
    
    // Uncheck the checkbox
    await page.locator("#checkbox1").uncheck()

    // negative scenario - to verified not checked other checkboxes
    await expect(await page.locator("#checkbox1").isChecked()).toBeFalsy()

    await page.waitForTimeout(5000)

    // handle multiple checkbox

    const checkbox = [ 
                        "#checkbox1",
                        "#checkbox2",
                        "#checkbox3"
                    
                    
                    ];

    for(const locator of checkbox){ // select for multiple checkbox
        await page.locator(locator).check()
    }

    await page.waitForTimeout(5000)

    for(const locator of checkbox){ // unselect for multiple already selected checkbox
         
        if(await page.locator(locator).isChecked())
        {   
        await page.locator(locator).uncheck()
        }
    }

    await page.waitForTimeout(5000)


});