
import { Builder, Capabilities, By } from "selenium-webdriver"
import { disposeEmitNodes } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test ('add to duo button works correctly', async () => {
    const addtoDuo = await driver.findElement(By.id('duel'))
    const displayed = await addtoDuo.isDisplayed()
    expect(displayed).toBe(true)
})
test('see all bots button works', async () => {
    const seeAllBots = await driver.findElement(By.id('see-all'))
    const displayed = await seeAllBots.isDisplayed()
    expect(displayed).toBe(true)
})