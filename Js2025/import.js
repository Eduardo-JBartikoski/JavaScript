import TestClass from './aula1.js';

const testClass = new TestClass();
console.log("Prop 1 = " + testClass.prop1);
console.log("Prop 2 = " + testClass.prop2);
//console.log("Prop 2 = " + testClass.#prop2);

 const info = testClass.doSomething("P1");
 console.log(info);