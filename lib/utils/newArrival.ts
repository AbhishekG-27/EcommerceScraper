"use server";
import puppeteer from "puppeteer";

const newArrival = async () => {
  const url =
    "https://www.amazon.in/gp/new-releases/apparel/ref=zg_bsnr_nav_apparel_0";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const result = await page.evaluate(() => {
    const images: string[] = [];
    const titles: string[] = [];
    document
      ?.querySelector("div.p13n-gridRow._cDEzb_grid-row_3Cywl")
      .querySelectorAll(
        "div.a-column.a-span12.a-text-center._cDEzb_grid-column_2hIsc"
      )
      .forEach((element, index) => {
        const image = element.querySelector("img").getAttribute("src");
        const title = element
          .querySelectorAll("div._cDEzb_p13n-sc-css-line-clamp-3_g3dy1")
          .forEach((el) => {
            titles.push(el.innerText);
          });
        images.push(image);
      });
    images.length = 6;
    titles.length = 6;
    const data = [];
    for (let i = 0; i < images.length; i++) {
      data.push({ image: images[i], title: titles[i] });
    }
    return data;
  });
  await browser.close();
  return result;
};

export default newArrival;
