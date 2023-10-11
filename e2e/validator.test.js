import puppeteer from 'puppeteer'

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: 'new',
    slowMo: 10,
    devtools: true
  })
  page = await browser.newPage()
})

afterAll(async () => {
  await browser.close()
})

async function navigateAndInitialize () {
  await page.goto('http://localhost:8080')
  await page.waitForSelector('.card-input-container')
  const form = await page.$('.card-input-container')
  const input = await form.$('.input-field')
  const submit = await form.$('.submit')
  return { form, input, submit }
}

test('Form should render on page start', async () => {
  await navigateAndInitialize()
})

test('Form input is invalid', async () => {
  const { input, submit } = await navigateAndInitialize()
  await input.type('7715964180')
  await submit.click()
  const submitButtonText = await page.$eval('.submit', (submitButton) => submitButton.textContent)
  expect(submitButtonText).toBe('Данные не валидны')
}, 20000)

test('Form input valid', async () => {
  const { input, submit } = await navigateAndInitialize()
  await input.type('4111111111111111')
  await submit.click()
  const submitButtonText = await page.$eval('.submit', (submitButton) => submitButton.textContent)
  expect(submitButtonText).toBe('Данные валидны')
}, 20000)

test('Form input visa', async () => {
  const { input, submit } = await navigateAndInitialize()
  await input.type('4111111111111111')
  await submit.click()
  await page.waitForSelector('.card-icon.visa.active')
}, 20000)

test('Form input mir', async () => {
  const { input, submit } = await navigateAndInitialize()
  await input.type('2202200822022008')
  await submit.click()
  await page.waitForSelector('.card-icon.mir.active')
}, 20000)

test('Form input mastercard', async () => {
  const { input, submit } = await navigateAndInitialize()
  await input.type('5380810267573021')
  await submit.click()
  await page.waitForSelector('.card-icon.mastercard.active')
}, 20000)
