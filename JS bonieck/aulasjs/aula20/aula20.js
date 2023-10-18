// loop em arrays

let cores = [
    { nome: 'preto', qt: 10},
    { nome: 'azul', qt: 5},
    {nome: 'vermelho', qt: 15}
]

/*
for(let n = 0; n < cores.length; n++){
    console.log(cores[n])
} */

// forma mais simples
/*
for (let num in cores){
    console.log(cores[num])
} */
// mais simples

for (cor of cores) {
    console.log(`nome: ${cor.nome} - ${cor.qt}`)
}

