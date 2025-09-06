for(let rows = 0; rows < 7; rows++) {
    for(let columns = 0; columns < rows; columns ++) {
        process.stdout.write('*');
    }
    process.stdout.write('*\n')
}

for (let triangleChar = '*'; triangleChar.length < 8; triangleChar+='*') {
    console.log(triangleChar)
}