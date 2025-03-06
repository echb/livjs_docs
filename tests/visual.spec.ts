import { test, expect } from '@playwright/test'

test('is same', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page.waitForTimeout(2000)
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('base.png')
})
