import * as cheerio from "cheerio";

const extractHrefs = (htmlString) => {
    if (!htmlString || typeof htmlString !== "string") {
        throw new Error("HTML string is required");
    }

    const $ = cheerio.load(htmlString);
    const hrefs = [];

    $("a").each((index, element) => {
        const href = $(element).attr("href");
        if (href) {
            hrefs.push(href);
        }
    });

    return hrefs;
}

export default extractHrefs;