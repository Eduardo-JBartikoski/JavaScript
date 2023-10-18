let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra'];
//filter é uma função que retorna outro array 

// mais simplificado
/* 
let bigFruits = fruits.filter ((item) => item.length > 4 );
*/



/*
// simplificado
let bigFruits = fruits.filter((item) => {
    return item.length > 4;
}) */

/*
let bigFruits = fruits.filter((item) => {
    if (item.length > 4) {
        return true;
    } else {
        return false;
    }
}) */

// every (todos)
//funciona igual filter
let ok = fruits.every((value) => {
    return value.length > 3;
}) 
if(ok) {
  console.log('Todos são maior que 3');
} else {
    console.log('Todos são menor que 3');
}

console.log(fruits)

// console.log(bigFruits)