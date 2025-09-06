let chessboard = '';

for(let rows = 0; rows < 8; rows++) {
    for (let cols = 0; cols < 8; cols++) {
        if(rows % 2 !== 0) {
            chessboard = chessboard + '# '
        }else {
            chessboard = chessboard + ' #'
        }
    }

    chessboard += '\n'
}
console.log(chessboard)