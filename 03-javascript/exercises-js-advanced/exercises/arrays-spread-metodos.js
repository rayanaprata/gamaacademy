const alunasGama = ["Paula", "Maria", "Stella", "Clara"];

// Acessar informações num array
console.log(alunasGama[2]); //Stella

// Operador spread (...)
const alunasXp = [...alunasGama, "Simara"];

console.log(alunasXp); // [ 'Paula', 'Maria', 'Stella', 'Clara', 'Simara' ]

// Métodos de iteração

// Antigo:
for (let i = 0; i < alunasXp.length; i++) {
  console.log(alunasXp[i]);
}

// Moderninhos:

// Map
alunasXp.map((aluna) => console.log(aluna));

// Filter
const numeros = [7, 15, 18, 20, 41, 53, 65, 68, 98, 99, 108, 150];

const numerosImpares = numeros.filter((numero) => numero % 2 != 0);
console.log(numerosImpares); // [ 7, 15, 41, 53, 65, 99 ]

const numerosPares = numeros.filter((numero) => numero % 2 == 0);
console.log(numerosPares); // [ 18, 20, 68, 98, 108, 150 ]

// Find

const produtos = ["geladeira", "fogao", "cama", "mesa"];

const encontraCama = produtos.find((produto) => produto === "cama");
console.log(encontraCama);

const encontraMesa = produtos.find((produto) => produto === "mesa");
console.log(encontraMesa);

// Sort (ordenação)

const numerosOrdenadosCrescente = numeros.sort();
console.log(numerosOrdenadosCrescente);

const numerosOrdenadosDecrescente = numeros.sort((a, b) => b - a);
console.log(numerosOrdenadosDecrescente);

// Reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1, 34, 35];

const soma = numbers.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual;
}, 15);

console.log(soma); // Vai somar o array numbers + o valor 15, result: 85
