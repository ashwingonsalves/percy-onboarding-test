const percySnapshot = require('@percy/webdriverio');

describe('BrowserStack Production', () => {
    it('Verifying popular endpoints', async () => {
        await browser.url('https://k8s.bsstag.com/');
        await(await $('#accept-cookie-notification')).click();
        await expect(browser).toHaveTitleContaining('Cross Browser Testing Platform');
        await percySnapshot('Home Page');

        await browser.url('https://k8s.bsstag.com/pricing');
        await expect(browser).toHaveTitleContaining('BrowserStack Pricing');
        await percySnapshot('Pricing Page');

        await browser.url('https://k8s.bsstag.com/integrations/automate');
        await expect(browser).toHaveTitleContaining('Integrations with Automate for Testing');
        await percySnapshot('Automate Integration');

        await browser.url('https://k8s.bsstag.com/docs/');
        await expect(browser).toHaveTitleContaining('Developer Documentation Home');
        await percySnapshot('Documentation');

    });
});
