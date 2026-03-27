function avgWordLength(sentence) {

  let allCharactersInSentence = sentence.split('')
  let charactersWithoutSpaces = allCharactersInSentence.filter((char)=> char !== ' ')
  let totalCharacters = charactersWithoutSpaces.length;
  let allWords = sentence.split(' ')
  let totalWords = allWords.length;



  //let totalCharacters = sentence.split('').filter((char) => char !== ' ').length
  //let totalWords = sentence.split(' ').length
  let result = totalCharacters / totalWords
  return result.toPrecision(3)

    /**for(let idx = 0; idx <= sentence.length - 1; idx++) {
         if(sentence[idx] === " ") {
        //   let totalSpaces = 0;
        //   let sum = totalSpaces + sentence[idx];
          console.log(idx);
        }
    }*/

}
console.log(avgWordLength("Trust me, I know these vents like the back of my Chang'"));
// let str = 'Trust me, I know these vents like the back of my Chang'
 //console.log(str.split('').filter((char) => char !== ' ').length);