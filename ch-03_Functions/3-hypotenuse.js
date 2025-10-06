// arrow function definition of function hypotenuse
let hypotenuse = (base, height) => {
    let hypotenuseSquared = (base * base) + (height * height);
    return Math.sqrt(hypotenuseSquared);
}
// function call
console.log(`${hypotenuse(6, 8)}`);