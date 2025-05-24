export default class ExtractHrefs {
    constructor(htmlString) {
        if (!htmlString || typeof htmlString !== "string") {
            throw new Error("HTML string is required");
        }
        this.htmlString = htmlString;
    }

    extractHrefs() {
        // const parser = new DOMParser();
        // const doc = parser.parseFromString(this.htmlString, "text/html");
        // const links = doc.querySelectorAll("a[href]");
        // return Array.from(links).map((link) => link.href);
    }
}