var idade = 16
console.log(`você tem a ${idade} anos.`)
if (idade < 16) {
    console.log('não vota')
} else {
    if (idade < 18 || idade > 65){
        console.log('voto opcional')
    } else { 
        console.log('Voto obrigatório')
    }
    
}

