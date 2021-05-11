const squares = Array.from(document.querySelectorAll('.grid div'))
//Nodelist of all the div squares on our board. Think of it as an array. 

//Your goal is to add a chessboard color pattern to this blank board using loops and Arrays.
//write code here

for(var i = 0; i<squares.length; i++){
    if(squares[i]%2 == 0){
        squares[i].classList.add('even');
    }
    else{
        squares[i].classList.add('odd');
    }
}

// let i;
// for (i = 0; i<squares.length; i++) {
//     squares[i].classList.add(i % 2 == 0 ? 'even' : 'odd')
// }

// let i;
// for (i = 0; i<squares.length; i++) {
//     if (squares.indexOf(squares[i]) % 2 == 0) {
//         squares[i].classList.add('even');
//     }
  
//     else{
//         squares[i].classList.add('odd');
//     }
// }
