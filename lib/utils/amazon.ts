"use server";
import puppeteer from "puppeteer";

export const scrapeAmazon = async (link: string) => {
  const url = link;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const result = await page.evaluate(() => {
    const title =
      document.querySelector("span#productTitle")?.textContent || "";
    const price =
      document.querySelectorAll("span.a-price-whole")[0].textContent || "";

    const image =
      document.querySelector("img#landingImage")?.getAttribute("src") || "";

    const ratings =
      document.querySelector("span#acrPopover")?.getAttribute("title") || "";
    return { title, price, image, ratings };
  });
  await browser.close();
  return result;
};
