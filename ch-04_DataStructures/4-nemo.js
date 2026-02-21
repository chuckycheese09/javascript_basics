function nemo(nemoCast) {
    for(let idx = 0; idx <= nemoCast.length - 1; idx++) {
        if(nemoCast[idx] === 'Nemo') {
            return idx;
        }
    }
    return -1;
}

let nemoCast1 = ['Crush', 'Marlin', 'Nemo', 'Peach', 'Bloat'];
let nemoCast2 = ['Deb', 'Darla', 'Bubbles', 'Bruce', 'Gargle', 'Nemo'];
let nemoCast3 = ['Anchor', 'Tad','Pearl', 'Chum', 'Coral', 'Fish School'];
let nemoCast4 = ['Marlin', 'Nemo', 'Darla', 'Nemo', 'Sheldon'];

let sol1 = nemo(nemoCast1);
let sol2 = nemo(nemoCast2);
let sol3 = nemo(nemoCast3);
let sol4 = nemo(nemoCast4);

console.log((sol1));
console.log(sol2);
console.log(sol3);
console.log(sol4);