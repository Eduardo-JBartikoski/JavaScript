/*const object = {prop1: 1, prop2: "Valor 2"};
console.log(object);

console.log("Valor da propriedade 1" + object.prop1);
console.log("Valor da propriedade 1" + object.prop2);

object.prop1 = "Novo valor 1";
console.log("Valor da propriedade 1" + object.prop1);*/

//
/*const object = { prop1: 1, metodo1: () => {return "Valor M1"} };
let info = object.metodo1();
console.log("Valor do método 1 =" + info);

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Criando objetos a partir da classe
let pessoa1 = new Pessoa("Maria", 25);
let pessoa2 = new Pessoa("João", 30);

pessoa1.apresentar();  // Olá, meu nome é Maria e tenho 25 anos.
pessoa2.apresentar();  // Olá, meu nome é João e tenho 30 anos. */

export default class TestClass  {

    prop1 = 0;
    #prop2 = 200;

    constructor() {
        console.log("Constructor");
    }

    doSomething(param) {
        return "Doing" + this.#prop2 + " - " + param;
    }

}