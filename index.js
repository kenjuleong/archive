const puppeteer = require('puppeteer');
//const puppeteer = require('puppeteer-extra');
const { readFileSync, writeFileSync } = require("fs");

async function browser(url) {
    const browser = await puppeteer.launch();
   
    const page = await browser.newPage();
    const page2 = await browser.newPage();
    const page3 = await browser.newPage();
    const page4 = await browser.newPage();
    const page5 = await browser.newPage();
    const page6 = await browser.newPage();
    const page7 = await browser.newPage();
    const page8 = await browser.newPage();
    const page9 = await browser.newPage();
    const page10 = await browser.newPage();
    const page11 = await browser.newPage();
    
    try {
    await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
    await page.goto(`https://www.google.com/search?q=joeleeofficial+github`, {waitUntil: ['networkidle0']});
    //await page.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://github.com/joeleeofficial'))?.click()`)
    await page.click("a[href='https://github.com/joeleeofficial']");
    }catch(e) { console.log(e) }
   
    try {
    await page2.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
    await page2.goto(`https://www.google.com/search?q=leecheeyong`, {waitUntil: ['networkidle0']});
    //await page2.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://github.com/leecheeyong'))?.click()`)
    await page2.click("a[href='https://github.com/leecheeyong']");
    }catch(e) { console.log("Failed Github") }
    
    try {
    await page3.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
    await page3.goto(`https://www.youtube.com/watch?v=U9BtF_oMHQg`, {waitUntil: ['networkidle0']});
    await page3.evaluate(`document.querySelector(".ytp-large-play-button").click()`)
    }catch(e) { console.log("Failed YouTube 1") }
    
    try {
    await page4.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
    await page4.goto(`https://www.youtube.com/shorts/U9BtF_oMHQg`, {waitUntil: 'networkidle0'});
    await page4.evaluate(`document.querySelector(".ytp-large-play-button").click()`)
    }catch(e) { console.log("Failed YouTube 2") }
    
    try {
    await page5.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
    await page5.goto(`https://www.google.com/search?q=joe+lee+chee+yong+introduction`, {waitUntil: ['networkidle0']});
    //await page5.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://www.joelee.works' || a.href === 'https://www.joelee.works/'))?.click()`)
    await page5.click("a[href='https://joe.js.org/']");
    }catch(e) {
        console.log("Failed joe.js.org");
    }
    
    try {
    await page6.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
    await page6.goto(`https://www.google.com/search?q=brawley+bot`, {waitUntil: ['networkidle0']});
    //await page6.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://brawley.js.org' || a.href === 'https://brawley.js.org/'))?.click()`)
    await page6.click(`a[href='https://brawley.js.org/']`);
    }catch(e) {
        console.log("Failed Jet Brawley Bot");
    }
    
    try {
    await page7.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
    await page7.goto(`https://www.google.com/search?q=jet+brawley`, {waitUntil: ['networkidle0']});
    await page7.click(`a[href='https://brawley.js.org/']`);
    }catch(e) {
        console.log("Failed Jet Brawley Google");
    }
    
    try {
    await page8.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
    await page8.goto(`https://www.google.com/search?q=jet+brawley`, {waitUntil: ['networkidle0']});
    await page8.click(`a[href='https://twitter.com/JetBrawley']`);
    }catch(e) {
        console.log("Failed Jet Brawley Twitter");
    }
    
    try {
    await page9.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
    await page9.goto(`https://www.google.com/search?q=joe+lee+chee+yong`, {waitUntil: ['networkidle0']});
    await page9.click(`a[href='https://www.joelee.works']`).catch(err=>{});
    await page9.click(`a[href='https://joe.js.org']`).catch(err=>{});
    }catch(e) {
    console.log("Failed joelee.works");
    }
    
    try {
    await page10.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
    await page10.goto(`https://www.google.com/search?q=jet+brawley+invite`, {waitUntil: ['networkidle0']});
    await page10.click(`a[href='https://brawley.js.org/invite']`);
    }catch(e) {
    console.log("Failed Brawley Invite");
    }
    
    try {
    await page11.goto(`https://i-am.surge.sh`, {waitUntil: ['networkidle0']});
    await page11.click(`button[id='status']`);
    await page11.click(`button[id='status']`);
    await page11.click(`button[id='friend']`);
    }catch(e) {
    console.log("Failed Surge");
    }

    
    setTimeout(async () => {
    await browser.close();
    }, 100000)
}

browser();
