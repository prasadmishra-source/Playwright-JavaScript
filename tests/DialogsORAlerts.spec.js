import {test, expect} from '@playwright/test'

test.skip('Alert with OK', async({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Before handle alert we need to write code - Dialog handler alert -> we need to first 

    // Enabling alert handling. // Dialog Window handler

    page.on('dialog', async dialog => { // 'dialog' is a keyword storing in dialog variable

        expect(dialog.type()).toBe('alert')
        expect(dialog.message()).toContain('I am an alert box!')

        await dialog.accept()

    })


    // Simple Alert

    await page.click("//*[text()='Simple Alert']")


    
    await page.waitForTimeout(5000)


})


test.skip ('Confirmation Dialog', async({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Before handle alert we need to write code - Dialog handler alert -> we need to first 

    // Enabling Confiramtion Dialog handling. // Dialog Window handler

    page.on('dialog', async dialog => { // 'dialog' is a keyword storing in dialog variable

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() // close by using OK button
        //await dialog.dismiss() // close by using OK button

    })


    // Confirmation Alert

    await page.click("//*[text()='Confirmation Alert']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')


    
    await page.waitForTimeout(5000)
})


test('Prompt Dialog', async({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Before handle alert we need to write code - Dialog handler alert -> we need to first 

    // Enabling Prompt Dialog handling. // Dialog Window handler

    page.on('dialog', async dialog => { // 'dialog' is a keyword storing in dialog variable

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toBe('Harry Potter')
        await dialog.accept('Rambo') // close by using OK button with text input
        //await dialog.dismiss() // close by using Cancel button

    })


    // Confirmation Alert

    await page.click("//*[text()='Prompt Alert']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Rambo! How are you today?')


    
    await page.waitForTimeout(5000)


})