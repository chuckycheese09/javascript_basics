function reverseSwapArray(arr) {
    if(arr[0] < arr[1]) {
         [arr[0], arr[1]] = [arr[1], arr[0]]
    }
    return arr;
}

console.log(reverseSwapArray([2, 3]));
console.log(reverseSwapArray([4, 3]));