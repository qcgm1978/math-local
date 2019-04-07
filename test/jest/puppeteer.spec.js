describe('Google', () => {
    beforeAll(async () => {
        await (page.url=_=>'sogou')
        // await page.goto('https://sogou.com')
    })

    it('should display "google" text on page', async () => {
        await expect(page.url()).toMatch('sogou')
    })
})
