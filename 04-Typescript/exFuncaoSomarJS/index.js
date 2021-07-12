function somar(num1, num2) {
  return num1 + num2;
}

const numero1 = "10";
const numero2 = "5";

result = somar(numero1, numero2);
console.log(result); // ele vai concatenar pois recebeu string e o javascript não impede que isso ocorra, diferente do typescript
