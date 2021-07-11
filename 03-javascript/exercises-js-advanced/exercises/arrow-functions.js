//utilizadas com funções anônimas ou funções de callback

function soma(a, b) {
  return a + b;
}

console.log(soma(3, 5)); //8

// arrow function
const sum = (num1, num2) => num1 + num2;

const sayHello = (name) => `Hello ${name}`;
console.log(sayHello("Rayana"));
