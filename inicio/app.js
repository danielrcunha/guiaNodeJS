/*usando modulo*/
var calculadora = require("./calculadora");
/*exportando a FN soma*/

console.log(calculadora.mult(10, 20));
console.log(calculadora.soma(20, 40));
calculadora.nome = "Calculadora do Daniel"
console.log(calculadora.nome);



