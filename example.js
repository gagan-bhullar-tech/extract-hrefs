import extractHrefs from "./index.js";

const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        this is test
    </head>
    <body>
        <p>
            <a href="https://example.com">Example</a>
            <a href="https://example.com/test">Example Test</a>
        </p>
    </body>
`;
const links = extractHrefs(html);
console.log(links);