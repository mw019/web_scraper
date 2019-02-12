const puppeteer = require('puppeteer');

(async () => {
  try {
    // setup the browser
    const browser = await puppeteer.launch({ headless: true });
    // setup new page
    const page = await browser.newPage();
  } catch (err) {
    console.log('The error is:', err);
  }
})();
