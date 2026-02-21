/**
 * 
 * @param {[]} array - array which its indices will be transformed to properties for the object and the elements transformed to values
 * @returns - an object with the indices of the array as properties and the array elements as values of the properties
 */

function mapIndexToElement(array) {
    let obj = {}

    for (let i = 0; i < array.length; i++) {
        // populating the object
        obj[i] = array[i]
        console.log(`Object after ${i}-iteration`, obj)
    }

    return obj
}

let testArray = ['Deb', 'Darla', 'Bubbles', 'Bruce', 'Gargle', 'Nemo']
let testArray2 = [100, 200, 30, 65, 77]

let sol1 = mapIndexToElement(testArray)
// let sol2 = mapIndexToElement(testArray2)

console.log(sol1)
// console.log(sol2)