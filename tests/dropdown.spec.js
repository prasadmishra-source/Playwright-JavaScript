import {test, expect} from '@playwright/test'

test('Handle dropdown', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.keyboard.press('F11')

    // Multiple ways to select options from dropdown

    //await page.locator("#country").selectOption({label:'India'}) //label attribute/ visible text
    //await page.locator("#country").selectOption('India') //visible text
    //await page.locator("#country").selectOption({value:'japan'}) //value attribute
    //await page.locator("#country").selectOption({index: 8}) //index attribute
    
    //await page.selectOption("#country", 'India') // by text only using direct

    //Assertations:

    // 1> check number of options in dropdown - Approach1

    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10) // to find total number of options

    // 2> check number of options in dropdown - Approach2

    // const options = await page.$$('#country option') // to get in array format
    // console.log("Number of options:", options.length) // to find the length of array
    // await expect(options.length).toBe(10) // to check expected length

    // 3> presence of value in dropdown

    // const content = await page.locator('#country').textContent() // textContent() = return String
    // await expect(content.includes('France')).toBeTruthy()

    // 4> check presence of value in the dropdown - using for looping

   /* const options = await page.$$('#country option')

    let status = false

    for(const option of options)
    {
        //console.log(await option.textContent()) // It will print all dropdown values in terminal

        let value = await option.textContent()
        if(value.includes('France'))
        {
            status = true
            break;
        }
        

    }
    
    await expect(status).toBeTruthy()

    */

    // 5> select option from dropdown using loop

    const options = await page.$$('#country option')
    for(const option of options)
    {

        let value = await option.textContent()
        if(value.includes('France'))
        {
            await page.selectOption('#country', value)
            break;
        }
    }
    await page.waitForTimeout(5000)


})