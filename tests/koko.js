describe('koko', function () {
	it('tests koko', function (browser) {
		browser
			.windowRect({ width: 1244, height: 948 })
			.navigateTo('https://www.google.com/')
			.setValue(
				'body > div > div.o3j99.ikrT4e.om7nvf > form > div > div > div.RNNXgb > div > div.a4bIc > input',
				'nightwatchjs'
			)
			.perform(function () {
				const actions = this.actions({ async: true });

				return actions.keyDown(this.Keys.ENTER);
			})
			.perform(function () {
				const actions = this.actions({ async: true });

				return actions.keyUp(this.Keys.ENTER);
			})
			.click(
				'#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3'
			)
			.waitForElementVisible(
				'#top-section > div > div > div > div > div:nth-child(1) > h1'
			)
			.expect.element(
				'#top-section > div > div > div > div > div:nth-child(1) > h1'
			)
			.text.to.contain('Nightwatch');
	});
});
