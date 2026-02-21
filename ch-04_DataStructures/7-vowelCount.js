/**
 * 
 * @param {string} sentence - arument sentence of type string which we check the vowels 
 * @returns {number} numberOfVowels - returns the number of vowels in the string, both uppercase and lowercase
 */
let vowelCount = (sentence) => {
    let numberOfVowels = 0;
    for(idx = 0; idx <= sentence.length-1; idx++) {

        if(sentence[idx] === 'a') {
            numberOfVowels++;
        }
        else if(sentence[idx] === 'A') {
            numberOfVowels++;
        }
        if(sentence[idx] === 'e') {
            numberOfVowels++
        }
        else if(sentence[idx] === 'E') {
            numberOfVowels++;
        }

        if(sentence[idx] === 'i') {
            numberOfVowels++;
        }
        else if(sentence[idx] === 'I') {
            numberOfVowels++;
        }

        if(sentence[idx] === 'o') {
            numberOfVowels++;
        }
        else if(sentence[idx] === 'O') {
            numberOfVowels++;
        }

        if(sentence[idx] === 'u') {
            numberOfVowels++;
        }
        else if(sentence[idx] === 'U') {
            numberOfVowels++;
        }
    }
    return numberOfVowels;
}


let testSentence1 = "I don't see pound puppies or monchhichis walking around";
let testSentence2 = "Say it don't spray it";
let testSentence3 = "Do unto others";
let testSentence4 = "A cow and a dog dUg a HOle";

let sol1 = vowelCount(testSentence1);
let sol2 = vowelCount(testSentence2);
let sol3 = vowelCount(testSentence3);
let sol4 = vowelCount(testSentence4);

console.log(sol1);
console.log(sol2);
console.log(sol3);
console.log(sol4);
