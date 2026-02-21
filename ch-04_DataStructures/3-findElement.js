/**
 * 
 * @param {[]} array - the array which will hold the element we'relooking for
 * @param {} element - to hold the element we are looking for in an array
 * @returns - the element if present , returns undefined if element is not present
 */
let findElement = (array, element) => {
    
    for(let idx = 0; idx <= array.length - 1; idx++){
        if(array[idx] === element) {
            return element;
        }
        
    }

}

let testElement = [10, -800, 99, 18];

let sol1 = findElement(testElement, 10);
let sol2 = findElement(testElement, 18);
let sol3 = findElement(testElement, -800);
let sol4 = findElement(testElement, 92);
let sol5 = findElement(testElement, 'cat')

console.log(sol1);
console.log(sol2);
console.log(sol3);
console.log(sol4);
console.log(sol5);