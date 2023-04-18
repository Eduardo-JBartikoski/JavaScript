{let num = [9,2,3,6,5,7]
num.sort()
let pos = num.length
for(let pos in num){
    console.log(`Essa é a posição ${pos} que tem o valor de  ${num[pos]}`)
}
}

let num = [9,6,3,5,2]
num.sort()
let pos = num.indexOf(3)
if(pos == -1){
    console.log('Esse número não existe')
} else {
console.log(`o valor está na posição ${pos}`)}




