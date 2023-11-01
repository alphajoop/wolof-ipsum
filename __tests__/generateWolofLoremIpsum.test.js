import { generateWolofLoremIpsum } from 'wolof-ipsum';
import wolofWordsData from '../wolof-words.json';

describe('generateWolofLoremIpsum', () => {
  const wolofWords = wolofWordsData.wolofWords.map((word) =>
    word.toLowerCase(),
  );

  it('should generate a valid Wolof Lorem Ipsum', () => {
    const loremIpsum = generateWolofLoremIpsum(2, 5);
    const lowerCaseLoremIpsum = loremIpsum.toLowerCase();

    const words = lowerCaseLoremIpsum.split(' ');
    words.forEach((word) => {
      const trimmedWord = word.trim();
      expect(wolofWords).toContain(trimmedWord);
    });
  });
});
