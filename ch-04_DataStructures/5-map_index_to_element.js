/**
 * 
 * @param {[]} array - array which its indices will be mapped to its elements 
 */
let mapIndexToElement = (array) => {
    
    for(let idx = 0; idx <= array.length-1; idx++) {
      console.log(`[${idx}] -> ${array[idx]}`);
    }
    
}
let testArray = ['Nemo', 'Bloat', 'Darla', 'Marlin']
mapIndexToElement(testArray);