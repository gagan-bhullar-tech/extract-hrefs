# Extract Hrefs

This library provides a simple way to extract `href` attributes from HTML content and normalize the URLs.

## Installation

```sh
npm install extract-hrefs
```

## Usage

```javascript
import { extractHrefs } from 'extract-hrefs';

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
```

## Output

```javascript
[ 'https://example.com/', 'https://example.com/test' ]
```

If you like my work, please consider giving it a star on [GitHub](http://github.com/gagan-bhullar-tech/extract-hrefs) or
Sponsor my work by following [sponsoring me](https://github.com/sponsors/gagan-bhullar-tech) link.