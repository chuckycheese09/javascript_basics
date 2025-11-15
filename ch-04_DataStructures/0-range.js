/**  Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to and
including end.*/
function range(start, end){
    let rangeArray = [];
    for( ;start <= end; start++) {
        
        rangeArray.push(start);
    }

    return rangeArray;
}
// console.log(range(1, 10));
/**Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the example program and see whether it
does indeed return 55.*/


/**
 * 
 * @param {[]} arr - the array for which we're finding
 * the sum of its elements 
 * @returns {number} sum - the sum of array elements
 */
function sum(arr) {
    let sum = 0;

    for( let idx = 0; idx < arr.length; idx++) {
        sum = sum + arr[idx];
    }
    return sum;
}
console.log(sum(range(100,102))); // [100,101,102]


