import { test, expect } from '@playwright/test';

test('placeholder test for AutoSuggest dropdown', async ({ page }) => {
	// Replace with actual test steps
	await page.goto('https://www.redbus.in');
	//const url = await page.goto('https://www.redbus.in');
	//expect(page.url()).toBe('Book Bus');

	await page.locator('//*[@class="inputAndSwapWrapper___6760f0"]').fill('Pune');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    const fromCity = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for (let option of fromCity)
    {
        const value = await option.textContent()
        console.log(value)

    }

    await page.waitForTimeout(3000)
});
