import wolofWordsData from './wolof-words.json';

export function generateWolofLoremIpsum(paragraphs, wordsPerParagraph) {
  const wolofWords = wolofWordsData.wolofWords;

  let wolofIpsum = '';

  for (let i = 0; i < paragraphs; i++) {
    for (let j = 0; j < wordsPerParagraph; j++) {
      const randomWord =
        wolofWords[Math.floor(Math.random() * wolofWords.length)];
      if (j === 0) {
        // Mettez en majuscule la première lettre et en minuscules le reste
        wolofIpsum +=
          randomWord.charAt(0).toUpperCase() +
          randomWord.slice(1).toLowerCase() +
          ' ';
      } else {
        wolofIpsum += randomWord.toLowerCase() + ' ';
      }
    }
    wolofIpsum += '\n\n';
  }

  return wolofIpsum.trim();
}
