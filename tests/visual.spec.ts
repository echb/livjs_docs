import { expect, test } from '@playwright/test'

test('is same', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page.waitForTimeout(2000)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(2000)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('base.png')
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
})
