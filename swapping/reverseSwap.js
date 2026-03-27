let reverseSwap = (a, b) => {
    if (a > b) {
        console.log(a, b)
    }
    else {
        let temp;

        temp = a;
        a = b;
        b = temp;
        console.log(a, b);
    }
}    
reverseSwap(10, 9);
reverseSwap(2, 3);