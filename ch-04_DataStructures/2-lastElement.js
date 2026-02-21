/**
 * 
 * @param {[]} array - the array where we find the last element
 * @returns {} last element- the last element of the array
 */
function lastElement(array) {
    let idx = array.length - 1;
    let lastElement = array[idx];
    return lastElement;
}
console.log(lastElement([18, 24, 67, 42]));
console.log(lastElement([-20, 67, 89, -72]));
console.log(lastElement(['Nemo', 'Marlin', 'Bubbles', 'Pearl']));

