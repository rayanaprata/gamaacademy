const musicas = require("./database");
//console.log(musicas);

// Pegar o input
const readLine = require("readline-sync");
const entrada = readLine.question("Deseja buscar uma banda? S/N");
console.log();

// Se S -> Mostrar as bandas disponíveis e perguntar qual banda ela escolhe
// Se N -> Mostrar todas as músicas disponíveis

if (entrada.toLocaleUpperCase() === "S") {
  console.log("Essas são as bandas disponíveis: ");
  console.log("Twenty One Pilots / Linkin Park");
  console.log();

  const bandaEscolhida = readLine.question("Qual banda você escolhe: ");

  const retorno = musicas.filter((musica) => musica.banda === bandaEscolhida);

  console.log();
  console.table(retorno);
} else {
  console.log("Essas são todas as músicas disponíveis: ");
  console.table(musicas);
}
