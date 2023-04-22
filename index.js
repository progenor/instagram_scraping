const puppeteer = require("puppeteer");

const iDontCareAboutCookies =
  "C:\\Users\\ner61\\AppData\\Local\\Vivaldi\\User Data\\Default\\Extensions\\fihnjjcciajhdojfnbdddfaoknhalnja\\3.4.6_0";

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${iDontCareAboutCookies}`,
      `--load-extension=${iDontCareAboutCookies}`,
      "--enable-automation",
    ],
  });
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/mortyexplainsit/");
  await page.waitForSelector("main");
  await delay(3000);
  await page.pdf({ path: "page.pdf", format: "A4" });
  await browser.close();
}

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

run();
