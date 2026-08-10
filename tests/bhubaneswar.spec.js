import { test, expect } from '@playwright/test';

test('Select Bhubaneswar as From city', async ({ page }) => {

    // 1. Open MakeMyTrip
    await page.goto('https://www.makemytrip.com/');

    // 2. Handle popup if present
    const popupClose = page.locator('span.commonModal__close');

    if (await popupClose.isVisible().catch(() => false)) {
        await popupClose.click();
    }

    // 3. Click From
    const fromField = page.locator('label[for="fromCity"]');

    await fromField.click();

    // 4. Check if Bhubaneswar is visible
    const bhubaneswar = page.getByText('Bhubaneswar', { exact: true });

    if (await bhubaneswar.isVisible().catch(() => false)) {

        // 5. Select Bhubaneswar
        await bhubaneswar.click();

        console.log('Bhubaneswar selected successfully');

    } else {

        console.log('Bhubaneswar is not visible');
    }
});