/*
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);
    return  sqrA + sqrB;
     
    
}

console.log(addSquares(2,3));
*/

function addSquares(a, b){
    const square = (x) => x * x;
    let sqrA = square(a)
    let sqrB = square(b)
    return sqrA + sqrB;
} 

console.log(addSquares(2,2))

/* método simplificado com a function em arrow */