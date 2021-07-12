// FizzBuzz
// Divisivel por 3 => 'Fizz',
// Divisivel por 5 => 'Buzz',
// Divisivel por 3 e 5 => 'FizzBuzz',
// Se não for um número => 'Não é um número'
// Se não for divisível por 3 e nem por 5 => Entrada

let resultado = fizzBuzz(18);
console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== "number") {
    return "Não é um número";
  } else if (entrada % 3 === 0 && entrada % 5 === 0) {
    return "FizzBuzz";
  } else if (entrada % 3 === 0) {
    return "Fizz";
  } else if (entrada % 5 === 0) {
    return "Buzz";
  } else {
    return entrada;
  }
}
