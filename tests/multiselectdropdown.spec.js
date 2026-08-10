import {test, expect} from '@playwright/test'

test('multidropdown', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // *** Select multiple options from multi select dropdown ***//

    // await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

    // ### Assertaions - 1 - check number of options in dropdown

    // const options = await page.locator('#colors option')
    // await expect(options).toHaveCount(7)

    // ### Assertion 2 - check number of options in dropdown using locator
    // const options = page.locator('#colors option')
    // //console.log("number of options: ", options.length)
    // await expect(options).toHaveCount(7)

    // ### Assertion 3 - check presence value in dropowm

    const content =await page.locator('#colors').textContent()
    // Positive Scenario
    await expect(content.includes('Blue')).toBeTruthy()
    // Negative Scenario
    await expect(content.includes('Black')).toBeFalsy()





    await page.waitForTimeout(5000)

})