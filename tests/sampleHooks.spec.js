import { test, expect } from '@playwright/test';
import { setupTest } from '../hooks/beforeEach';
import { cleanup } from '../hooks/afterEach';

test.beforeEach(async ({ page }) => {

    await setupTest(page);

});

test.afterEach(async ({ page }) => {

    await cleanup(page);

});

test('Login Test', async ({ page }) => {

    await page.fill('#username', 'admin');

    await page.fill('#password', 'admin123');

    await page.click('#login');

    await expect(page).toHaveURL(/dashboard/);

});