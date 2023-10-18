let pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Bartikoski',
    idade: 26,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome} `
    }
}
console.log(pessoa.nomeCompleto())

// arrow function nao tem acesso ao this