import{test, expect, chromium} from '@playwright/test'

test.skip('Handle Pages/Windows', async() => {

    // *** Create our Own Page ***
    const browser = await chromium.launch() // creating browser

    //Creates a new browser context. It won't share cookies/cache with other browser contexts.
    const context = await browser.newContext() // using browser -> we're creating context
    
    // by using context -> we're creating number of pages - two different pages
    const page1 = await context.newPage() // creating <page> fixture - Creates a new page in the browser context.
    const page2 = await context.newPage() // Creates a new page in the browser context.

    const allPages = context.pages() // Returns all open pages in the context.
    console.log("Number of pages crated:", allPages.length ) // how many pages created

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://orangehrm.com/")
    await expect(page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

})

test.only('Handle Multiple Pages', async() => {

    // *** Create our Own Page ***
    const browser = await chromium.launch() // creating browser


    //Creates a new browser context. It won't share cookies/cache with other browser contexts.
    const context = await browser.newContext() // using browser -> we're creating context
    
    // by using context -> we're creating number of pages - two different pages
    const page1 = await context.newPage() // creating <page> fixture - Creates a new page in the browser context.
    const page2 = await context.newPage() // Creates a new page in the browser context.

    const allPages = context.pages() // Returns all open pages in the context.
    console.log("Number of pages crated:", allPages.length ) // how many pages created

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    const pagePromise = context.waitForEvent('page')
    await page1.locator('//a[text()="OrangeHRM, Inc"]').click()

    const newPage = await pagePromise; // store in 'newPage'
    await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)

    await browser.close()

})