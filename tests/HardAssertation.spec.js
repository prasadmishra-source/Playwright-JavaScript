import { test, expect } from '@playwright/test'

test('Assertation validation', async({page}) => {

    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.goto('https://demo.nopcommerce.com/register')
    //await page.goto('https://www.irctc.co.in')

    // ************** waitForSelector() - to handle modal operator ***************
    //await page.waitForSelector('text=Welcome to IRCTC')

    // **************to handle 'modal alert pop-up' button - we can use < getByRole() > **************
    //await page.getByRole('button', {name: 'English'}).click()

    // await page.getByRole('heading', { name: 'Welcome to IRCTC' }).click();
    // await page.getByText('English').click();


 
    // await page.getByRole('heading', { name: 'demo.nopcommerce.com' }).click();
    // await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/f/av0/rch/l9bo2/0x4AAAAAAADnPIDROrmt1Wwj/light/fbE/new/normal?lang=auto"]').contentFrame().locator('body').click();

    

    // *****verify the expected URL is open or not       Page has a URL************
    await expect (page).toHaveURL('https://demo.nopcommerce.com/register')
    //await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await expect (page).toHaveURL('https://www.irctc.co.in/nget/train-search')


    // ******verify page have title or not                page has Title ***********
    //await expect (page).toHaveTitle('OrangeHRM')
    //await expect (page).toHaveTitle('IRCTC – Official Indian Railway Catering & Tourism Corporation Portal')
    await expect (page).toHaveTitle('nopCommerce demo store. Register')


    // ******expect(locator).toBeVisible()                element is visible********
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()
    //const logoElement = await page.locator('.orangehrm-login-branding')
    // const logoElement = await page.locator('[alt="Indian railway LOGO"]')
    // await expect(logoElement).toBeVisible()

    // ******expect(locator).toBeEnabled()  Control is Enabled******
    const searchUserName = page.getByPlaceholder('username')
    await expect(searchUserName).toBeEnabled();
    // const searchUserName = page.getByLabel('From')
    // await expect(searchUserName).toBeEnabled();

    // ******expect(locator).toBeChecked()                    Radio/Checkbox is checked*******

    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click() //select radio button
    await expect(maleRadioButton).toBeChecked()

    // check box

    const newsletterCheckbox = await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()

    // ****** expect(locator).toHaveAttribute()                Element has attribute ********

    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')

    // *** expect(locator).toHaveText()                        Element matches text ***

    await page.locator('.page-title h1').toHaveText('Register') // full text


    // *** expect(locator).toContaintext()                     Element contains text ***
    await page.locator('.page-title h1').toContainText('Reg') //partial Text
    
    // *** expect(locator).toHaveValue(value)                   Input has a value ***

    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@test.com')
    await expect(emailInput).toHaveValue('test@test.com') // invupt value is same or not

    //*** expect(locator).toHaveCount()             list of elements has given length ***
    // in dropdown how many options are there - lengths are correct or not

    const options = await page.locator('select[name="DateOfBirthMonth"] option')
    await expect(options).toHaveCount(13) 


    




    

    

    //await page.pause()





});