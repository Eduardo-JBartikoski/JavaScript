let cars = [
    { brand: 'fiat' , year: 2022} ,
    { brand: 'bmw' , year: 2018} ,
    { brand: 'ferrari' , year: 2020}
]

/*
cars.sort((a, b) => {
    return a.year - b.year;
});*/

// jeito simplificado com arrow


//mais simplificado com arrow
cars.sort((a, b) =>  a.year - b.year);


console.log(cars)

// ordenando ano
/*
cars.sort((a,b) => {
    if(a.year > b.year){
        return 1;
    } else  if (a.year < b.year){
        return -1;
    } else {
        return 0;
    }
})
*/






// teste meu

/*
cars.sort((a,b) => {
    if (a.brand > b.brand){
        return 1;
    } else {
        return -1;
    }
})

*/


