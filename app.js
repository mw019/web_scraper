const puppeteer = require('puppeteer');

(async () => {
  try {
    // setup the browser
    const browser = await puppeteer.launch({ headless: true });
    // setup new page
    const page = await browser.newPage();

    // adding user agent string
    page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
    );

    // setup the URL
    await page.goto('https://experts.shopify.com/');
  } catch (err) {
    console.log('The error is:', err);
  }
})();
