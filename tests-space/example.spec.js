const { test, expect } = require('@playwright/test');

test('Homepage visual snapshot', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveScreenshot('homepage.png');
});