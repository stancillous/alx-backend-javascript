export default function cleanSet(set, startString) {
  if (startString.length <= 0) {
    return '';
  }

  const strings = [];
  for (const str of set) {
    if (str.startsWith(startString)) {
      const restOfWord = str.slice(startString.length);
      strings.push(restOfWord);
    }
  }
  return strings.join('-');
}
