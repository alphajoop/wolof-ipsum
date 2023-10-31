const generateWolofLoremIpsum = require('../index');

test('generateWolofLoremIpsum generates a paragraph with the correct number of words', () => {
  const lorem = generateWolofLoremIpsum(1, 10);
  const words = lorem.split(' ');
  expect(words.length).toBe(10);
});
