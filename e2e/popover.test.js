import puppetteer from 'puppeteer'

jest.setTimeout(60000)
describe('test', () => {
  let browser = null
  let page = null
  const baseUrl = 'http://localhost:8080'

  beforeEach(async () => {
    browser = await puppetteer.launch({
      headless: 'new',
      slowMo: 100,
      devtools: true
    })

    page = await browser.newPage()
  })

  afterEach(async () => {
    await browser.close()
  })

  test('remove tooltip', async () => {
    await page.goto(baseUrl)
    const button = await page.$('button')
    button.click().catch((e) => e)
    await page.waitForSelector('.hidden')
  })
})
