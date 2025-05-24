import * as cheerio from "cheerio";
import normalizeUrl from 'normalize-url';

const normalizeUrls = (links) => {
    return links.map(link => {
        try {
            return normalizeUrl(link, { stripWWW: false });
        } catch (error) {
            console.error(`Error normalizing URL: ${link}`, error);
            return link; // Return the original link if normalization fails
        }
    });
};

const extractHrefs = (htmlString) => {
    if (!htmlString || typeof htmlString !== "string") {
        throw new Error("HTML string is required");
    }

    const $ = cheerio.load(htmlString);
    const urls = [];

    $("a").each((index, element) => {
        const href = $(element).attr("href");
        if (href) {
            urls.push(href);
        }
    });

    return normalizeUrls(urls);
}

export default extractHrefs;