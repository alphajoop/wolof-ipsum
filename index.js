function generateWolofLoremIpsum(paragraphs, wordsPerParagraph) {
  const wolofWords = [
    'baay',
    'ñoom',
    'soppi',
    'jàmm',
    'bëgg',
    'nopp',
    'xalis',
    'liggey',
    'noppal',
    'rëpp',
    'kanam',
    'jàng',
    'set',
    'ndey',
    'def',
    'goor',
    'sëriñ',
    'dëkk',
    'jël',
    'nopp',
    'yàlla',
    'wone',
    'bët',
    'nël',
  ];

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

module.exports = generateWolofLoremIpsum;
