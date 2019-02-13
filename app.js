const puppeteer = require('puppeteer');

(async () => {
  try {
    // setup the browser
    const browser = await puppeteer.launch({
      headless: true
    });
    // setup new page
    const page = await browser.newPage();

    // adding user agent string
    page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
    );

    // setup the URL
    await page.goto('https://scrapethissite.com/pages/ajax-javascript/');

    // await till certain part of the page loads
    await page.waitForSelector('.col-md-12');
    console.log('Its working');

    // get all the year-links from the page
    const yearLinks = await page.evaluate(() => document.querySelectorAll('a.year-link'))
    // const yearLinks = await page.$$('.year-link');
    console.log(yearLinks.length);
    // for (const year of yearLinks) {
    //   const text = await year.evaluate('year-link', a => a.innertext)
    //   console.log(text);
    // }
    //
    for (year of yearLinks) {
      // const yearLink = yearLinks[i];
      const button = await page.evaluate(() => document.querySelectorAll('a.year-link'));
      button.click();

      // await page.waitForSelector('.table');
      // const lis = await page.$$('.table ');
      // console.log(lis);

      // loop over each year

    }
  } catch (err) {
    console.log('The error is:', err);
  }

  // await browser.close();
})();