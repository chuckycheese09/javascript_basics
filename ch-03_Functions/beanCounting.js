/**
 * 
 * @param {string} str string value for which we count the number of "B" characters
 * @returns {number} count - the number of Bs in string str 
 */
function countBs(str) {
      let count = 0;
      for(let idx = 0; idx <= str.length-1; idx++) {
            if(str[idx] === "B"){
                  count ++;
            }
      }
      return count;
}

function countChar(str, testLetter) {
      let count = 0;
      for(let idx = 0; idx <= str.length-1; idx++) {
            if(str[idx] === testLetter) {
                  count++;
            }

      }
      return count;
}
console.log(countBs("Bread Butter Bees BoB"));
console.log(countChar("Amazing grace", "b"));
