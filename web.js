import puppeteer from 'puppeteer';

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
     //    deviceScaleFactor: 2
      });
      await page.goto(url);
      await wait(2000);
      const openedURLs = new Set();
      console.log(`
      Went: ${url}`)
      const hrefs = await page.$$eval('a', el => el.map(x => x.getAttribute('href')));
      console.log(`
      Collected ${hrefs.length} urls`)
      for (let i = 0; i<hrefs.length; i++) {
      await wait(2000);
      if(hrefs[i] != url) {
      if(hrefs[i].startsWith('https://') && !openedURLs.has(hrefs[i])){
      await (await browser.newPage()).goto(hrefs[i]);
      openedURLs.add(hrefs[i]);
      console.log(`
      Opened URL: ${hrefs[i]}`)
      }
      }
      } 
      console.log(`
      There are now ${openedURLs.size} tabs opened`)
      await wait(5000);
      console.log(`
      Ready for screenshot`)
      const pages = await browser.pages();
      console.log(`
      There are ${pages.length} pages opened.`)
      pages.forEach(async (currentPage) => {
        try {
          const pageURL = (await currentPage.url()).slice(8).split("/").join("@");
          await page.screenshot({path: `./${url}/${pageURL == url ? "index" : pageURL}.png`, fullPage: true});
        }catch(e) {
          console.log(e)
        }
      });
  }catch(e) {
    console.log(e)
  }
});
