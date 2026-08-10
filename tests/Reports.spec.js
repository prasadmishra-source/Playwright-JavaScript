import {test, expect} from '@playwright/test'

test('Report 1', async({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')
    await expect(page).toHaveTitle('Demo Web Shop')
})

test('Report 2', async({ page }) =>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking')
})

test('Report 3', async({ page }) => {
    await page.goto('https://demoqa.com/books')
    await expect(page).toHaveTitle('demosite')
})

// reference image both positive and negative - playwright practice\note

