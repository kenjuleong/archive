import puppeteer from 'puppeteer';
import fs from 'fs';

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
         deviceScaleFactor: 2
      });
      await page.goto(url);
      if (!fs.existsSync(url.slice(8))){
         fs.mkdirSync(url.slice(8));
      }
      await wait(2000);
      const openedURLs = new Set();
      console.log(`
      Went: ${url}`)
      const hrefs = await page.$$eval('a', el => el.map(x => x.getAttribute('href')));
      console.log(`
      Collected ${hrefs.length} urls`)
      for (let i = 0; i<hrefs.length; i++) {
      if(hrefs[i] != url) {
      if(hrefs[i].startsWith('https://') && !openedURLs.has(hrefs[i])){
      var currentPage = await browser.newPage();
      openedURLs.add(hrefs[i]);
      try {
        await currentPage.goto(hrefs[i]);
        await wait(2000);
        const pageURL = (await currentPage.url()).slice(8).split("/").join("@");
        await page.screenshot({path: `./${url.slice(8)}/${pageURL == url ? "index" : pageURL}.png`, fullPage: true});
        console.log(`
        Done URL: ${hrefs[i]}`)
      }catch(e) {
        console.log(e)
      }
      await currentPage.close();
      }
      }
      } 
       await browser.close();
      console.log(`
      Took ${openedURLs.size} pages of screenshot.`)
  }catch(e) {
    console.log(e)
  }
});
