// Classe já existe no JS, porém nem todos os browsers suportam

class Data {
  public dia: number;
  public mes: number;
  ano: number; //propriedades já vem públicas por default



  // é possível definir modificadores de acesso no Typescript
  private senha: string;

  constructor(dia: number, mes: number, ano: number, senha: string, public propriedadeQueNaoPrecisoDeclararAntesQueJaTemUmValorDefaultDefinido: string = "Se o usuário não incluir nenhum campo para este atributo como parametro, automaticamente esta frase será o valor deste atributo.") {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
    this.senha = senha;
  }
}

const data = new Data(1, 1, 2021, 'minhaSenha');
console.log(data.dia);
// não é possível acessar senha pois só a classe precisa desta propriedade, ela é privada!
// console.log(data.senha);


/* Site que gera o JS do seu Typescript na hora: https://www.typescriptlang.org/play?#code/ */