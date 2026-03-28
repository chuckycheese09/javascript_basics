function swapArray(arr) {
    if( arr[0] < arr[1]) {
        return([arr[0], arr[1]])
    }
    else {
        return([arr[1], arr[0]])
    }
 }
console.log( swapArray([2, 3]));
console.log(swapArray([3, 2]));
console.log(swapArray([10, 9]));