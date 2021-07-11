const pessoa = {
  nome: "Rayana",
  idade: 20,
  cidade: "Blumenau",
};

// Notação de pontos
console.log(pessoa.nome); //Rayana

// Notação de colchetes
console.log(pessoa["idade"]); // 20

// Como desestruturar Objetos

const { nome, idade, cidade } = pessoa;
console.log(`Destruturing name: ${nome}`); // Rayana
console.log(`Destruturing name: ${idade}`); // 20
console.log(`Destruturing name: ${cidade}`); // Blumenau
