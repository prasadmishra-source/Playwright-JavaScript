import {test, expect} from '@playwright/test'

test('Pagination Web table', async({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //WebTableOrPagination

    const table = await page.locator('#productTable')

        // total number of rows and columns

    const columns = await table.locator('thead tr th')
    console.log('Number of columns:', await columns.count()) //4
    expect(await columns.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log('Number of columns:', await rows.count()) //5
    expect(await rows.count()).toBe(5)

    // Select checkbox for Product 4

    const matchedRow = rows.filter({
        hasText: 'Product 4'
    })

    await matchedRow.locator('input[type="checkbox"]').check()

    await page.waitForTimeout(3000)

})