//import { test, expect } from '@playwright/test'

const pw = require('@playwright/test');
const { chromium } = pw || require('playwright');

if (!chromium) {
    throw new Error('Playwright browser object is undefined. Install @playwright/test or playwright.');
}

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.makemytrip.com/');

    const popupClose = page.locator('span.commonModal__close');
    if (await popupClose.isVisible().catch(() => false)) {
        await popupClose.click();
    }

    const fromField = page.locator('label[for="fromCity"]');
    await fromField.click();

    const bhubaneswar = page.getByText('Bhubaneswar', { exact: true });
    if (await bhubaneswar.isVisible().catch(() => false)) {
        await bhubaneswar.click();
        console.log('Bhubaneswar selected successfully');
    } else {
        console.log('Bhubaneswar is not visible');
    }

    await browser.close();
})
    