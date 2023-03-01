const puppeteer = require('puppeteer');

const urlList = ['https://weirdkaya.com'];
const wait = (time) => new Promise((resolve) => { setTimeout(() => resolve(), time) });

urlList.forEach(async (url) => {
  try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
      await page.setViewport({
         width: 1200,
         height: 900,
         deviceScaleFactor: 3
      });
      await page.goto(url);
      await wait(2000);
      const hrefs = await page.$eval('a', a => a.click());
      await wait(5000);
      const pages = await browser.pages();
      pages.forEach(async (currentPage) => {
        try {
          const pageURL = (await currentPage.url()).slice(url.length);
          await page.screenshot({path: `./${url}/${pageURL.length < 1 ? "index" : pageURL}.png`, fullPage: true});
        }catch(e) {
          console.log(e)
        }
      });
  }catch(e) {
    console.log(e)
  }
});
