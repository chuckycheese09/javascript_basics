let a = 8;
let b = 6;

//
let min = Math.min(a, b);
let max = Math.max(a, b);
let hypotenuse =Math.hypot(a, b);



console.log(`The minimum is: ${min}`);
console.log(`The maximum is: ${max}`);
console.log(`The hypotenuse is: ${hypotenuse}`);
console.log(`6 raised to the power of 8 is: ${Math.pow(b,a)}`);
console.log('base2 logarithm of 8 is: ', Math.log2(a));
console.log("base10 logarithm of %d is: %f", b, Math.log10(b));
console.log("8 raised to the power of 6 is:", a ** b);