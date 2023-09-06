import { chromium } from '@playwright/test'


const dolarData = async (page) => {
const price = await page.$eval('#dt-currency-calculator-form > label')
console.log(price)
}

const dolarPrice = async () => {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('https://dolartoday.com/')

  const input = page.locator('#amount')
  const button = page.locator('#calculate-button')
  await input.clear()
  await input.type('1')
  await button.click()
 dolarData(page)
  }

dolarPrice()
