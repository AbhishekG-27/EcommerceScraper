"use server";
import puppeteer from "puppeteer";

const beauty = async () => {
  const url = "https://www.amazon.in/gp/bestsellers/beauty/ref=zg_bs_beauty_sm";

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
            if (el !== null) {
              titles.push(el.innerText);
            }
          });
        images.push(image);
      });
    images.length = 12;
    titles.length = 12;
    const data = [];
    for (let i = 0; i < images.length; i++) {
      data.push({ image: images[i], title: titles[i] });
    }
    return data;
  });
  await browser.close();
  return result;
};

export default beauty;
