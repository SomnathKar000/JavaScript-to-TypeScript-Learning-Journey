let words = ["This", "is", "an", "example", "of", "text", "justification."];
let maxWidth = 16;
let getSpace = (n: number): string => {
  let s = "";
  for (let i = 0; i < n; i++) {
    s += " ";
  }
  return s;
};

function fullJustify(words: string[], maxWidth: number): string[] {
  const fixLine = (wordLine: string[], count: number): string => {
    let maxSpace = maxWidth - count;
    if (wordLine.length === 1) {
      return wordLine[0] + getSpace(maxSpace);
    }

    let bSpace = Math.floor(maxSpace / (wordLine.length - 1));
    let extraSpace = maxSpace % (wordLine.length - 1);
    let line = wordLine[0];
    for (let i = 1; i < wordLine.length; i++) {
      line += getSpace(bSpace);
      if (i <= extraSpace) {
        line += " ";
      }
      line += wordLine[i];
    }
    return line;
  };

  let result: string[] = [];
  let wordLine: string[] = [];
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (count + wordLine.length + words[i].length <= maxWidth) {
      wordLine.push(words[i]);
      count += words[i].length;
    } else {
      result.push(fixLine(wordLine, count));
      wordLine = [words[i]];
      count = words[i].length;
    }
  }
  if (wordLine.length > 0) {
    let lastLine = wordLine.join(" ");
    lastLine += getSpace(maxWidth - count - (wordLine.length - 1));
    result.push(lastLine);
  }
  return result;
}

console.log(fullJustify(words, maxWidth));
