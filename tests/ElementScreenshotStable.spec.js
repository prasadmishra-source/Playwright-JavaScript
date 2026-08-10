import { test } from '@playwright/test';

test.only('Element screenshot with stable locator', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/screenshots');

    const heading = page.locator('h2', { hasText: 'Playwright Test' });
    await heading.screenshot({ path: 'shots/' + Date.now() + 'ElementStable.png' });
});
