// function defintion
function hypotenuse(base, height) {
    let  hypotenuseSquared = (base * base) + (height * height);
    return Math.sqrt(hypotenuseSquared);
}
// function call 
console.log(hypotenuse(6, 8));
console.log(hypotenuse(5, 12));
console.log('6 8', hypotenuse(6, 8));