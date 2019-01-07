export class Entry {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  wordCount() {
    let count = (this.body.split(' ')).length;
    return count;
  }
  vowelCount() {
    const bodyLower = this.body.toLowerCase();
    const arr = bodyLower.split('');
    const filtered = arr.filter(c => c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u');
    console.log(filtered);
    const total = filtered.length;
    return total;
  }

  consonantCount() {
    const bodyLower = this.body.toLowerCase();
    const arr = bodyLower.split('');
    const filtered = arr.filter(c => c === 'b' || c === 'c' || c === 'd' || c === 'f' || c === 'g' || c === 'h' || c === 'j' || c === 'k' || c === 'l' || c === 'm' || c === 'n' || c === 'p' || c === 'q' || c === 'r' || c === 's' || c === 't' || c === 'v' || c === 'w' || c === 'x' || c === 'y' || c === 'z');
    const total = filtered.length
    console.log(filtered);
    return total;
  }

  getTeaser(){
    let sentences = (this.body.split('.'));
    let firstSentence = sentences[0];

    let words = firstSentence.split(' ');
    if(words.length > 8){
      let shortArr = words.splice(0, 8);
      let solution = shortArr.join(' ');
      return solution;
    } else 
    {
      return firstSentence;
    }

  }
}

