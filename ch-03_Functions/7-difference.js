function abs(x) {
    if (x >= 0){
        return x;
    }else {
        return x / -1;
    };
}

function difference(num1, num2) {
    let result = num1 - num2;
    return abs(result)
}
console.log(difference(10, 20));