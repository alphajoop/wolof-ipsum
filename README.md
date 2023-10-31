# wolof-ipsum

A Lorem Ipsum generator in Wolof for your project.

## Installation

You can install this package using npm.

`bash`
npm install wolof-ipsum

## Usage

Here's how you can use this package in your JavaScript project:

const generateWolofLoremIpsum = require('wolof-ipsum');

// Generate a paragraph of 3 sentences, each sentence containing 50 words
const lorem = generateWolofLoremIpsum(3, 50);

console.log(lorem);

Calling generateWolofLoremIpsum(paragraphs, wordsPerParagraph) will return a Lorem Ipsum text in Wolof with the specified number of paragraphs and words per paragraph.

## Contribution

We encourage contributions to this project. If you'd like to contribute, you can open issues, send pull requests, or improve the documentation.

License
This package is licensed under the GNU General Public License (GPL). Please refer to the LICENSE file for more details.
