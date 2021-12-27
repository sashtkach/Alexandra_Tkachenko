// Alexandra Tkachenko, KA-92
// 27.12.2021
// WebUI



const { By, Key, Builder, WebElement } = require('selenium-webdriver')
require('chromedriver')



async function test() {
	let driver = await new Builder().forBrowser('chrome').build()
	await driver.get('https://opensource-demo.orangehrmlive.com/')
	
	
	// authorization, case sensitive
	
	const username = 'Admin'
	const password = 'admin123'

	await driver
	.findElement(By.name('txtUsername'))
	.sendKeys(username, Key.RETURN)
	await driver
	.findElement(By.name('txtPassword'))
	.sendKeys(password, Key.RETURN)
	
	
	// going to Admin -> Job - Work Shifts
	
	let Admin_button = await driver.findElement(By.id('menu_admin_viewAdminModule'))
	let Job_droplist = await driver.findElement(By.id('menu_admin_Job'))
	let WorkShifts_button = await driver.findElement(By.id('menu_admin_workShift'))
	let actions = driver.actions({ async: true })
	
	await actions
	.move({ origin: Admin_button })
	.move({ origin: Job_droplist })
	.move({ origin: WorkShifts_button })
	.click()
	.perform()
	
	
	// adding new record
	
	const btnAdd = await driver.findElement(By.name('btnAdd')).click()

	let ShiftName = 'Infernal schedule (12 hours, hail Satan)'
	let h_from = '06:00'
	let h_to = '18:00'

	await driver.findElement(By.name('workShift[name]')).sendKeys(ShiftName)

	await driver
	.findElement(By.name('workShift[workHours][from]'))
	.sendKeys(h_from)
	await driver
	.findElement(By.name('workShift[workHours][to]'))
	.sendKeys(h_to)
	
	await driver.sleep(2000)
	await driver.findElement(By.css('#workShift_availableEmp > option:nth-child(1)')).click()
	await driver.findElement(By.id('btnAssignEmployee')).click()
	await driver.sleep(2000)
	await driver.findElement(By.name('btnSave')).click()
	
	
	// checking if changes are visible
	
	let AddedRecord = await driver.findElement(
	By.xpath("//td[@class='left']/a[text()='Infernal schedule (12 hours, hail Satan)']")
	)
	let row = await AddedRecord.findElement(By.xpath('./../..'))

	if (
	(
	  await row.findElement(By.xpath('td[text()="06:00"]')).isDisplayed()
	).valueOf() &&
	(
	  await row.findElement(By.xpath('td[text()="18:00"]')).isDisplayed()
	).valueOf() &&
	(
	  await row.findElement(By.xpath('td[text()="12.00"]')).isDisplayed()
	).valueOf() &&
	(await row.findElement(By.xpath('td[1]/input')).isDisplayed()).valueOf()
	) {
	await row.findElement(By.xpath('td[1]/input')).click()
	} else {
	throw new Error('Work shift was not added')
	}

	await driver.sleep(2000)
	
	
	// deleting the added record

	await driver.findElement(By.id('btnDelete')).click()
	await driver.findElement(By.id('dialogDeleteBtn')).click()

	try {
	await row.findElement(By.xpath('td[text()="06:00"]')).isDisplayed()
	} catch (e) {
	console.log('The work shift has been added and removed successfully!')
	}

	await driver.sleep(5000)

	let Title = await driver.getTitle()
	console.log('Title is:', Title)

	await driver.quit()
}



test()
// the website suddenly stopped working (even manually)