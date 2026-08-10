import { expect, test } from '@playwright/test';

test.skip('upload files - Single File', async({ page }) => {

    // navagate to the page
    await page.goto('https://sharedrop.io/')

    //wait for some time - until the the element is present on the web page
    await page.waitForSelector('.um_line11')

    // find locator of upload file section
    await page.locator('.um_line11').click();

    // for single and multiple we'll use the same method -> <setInputFiles()>
    await page.locator('.um_line11').setInputFiles('uploadFiles\Manual Testing Job Details _ Gainwell Technologies LLC.pdf')

    await page.waitForTimeout(3000)


})

test.only('upload files - Multiple File', async({ page }) => {

    // navagate to the page
    await page.goto('https://davidwalsh.name./demo/multiple-file-upload.php')

    // get the locator of 'upload element' and set files
    await page.locator('#filesToUpload').setInputFiles([
        'uploadFiles/Manual Testing Job Details _ Gainwell Technologies LLC.pdf',
        'uploadFiles/System Test Engineer - Manual Tester (Software and Hardware) - Gurugram - Bean Hr Consulting - 5 to 10 years of experience.pdf'
    ])

    // wait for some time
    await page.waitForTimeout(3000)

    // To verify by name of files -> files are uploaded or not (use partial/regex to avoid exact-match issues)
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText(/Manual Testing Job Details _ Gainwell Technologies LLC/)
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText(/System Test Engineer - Manual Tester/)
    
    // wait for some time
    await page.waitForTimeout(3000)

    // Removing Files
    await page.locator('#filesToUpload').setInputFiles([]) // we have to pass an <Empty array> to remove/dettached all files

    // wait for some time
    await page.waitForTimeout(3000)

    // To verify files are removed or not by using exception
    await expect(page.locator('//*[text()="No Files Selected"]')).toHaveText('No Files Selected')

    await page.waitForTimeout(3000)

})