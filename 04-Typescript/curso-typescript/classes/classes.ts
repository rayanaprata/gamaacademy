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


class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220
  ) {

  }

  private alterarVelocidade(delta: number) {
    if (this.velocidadeAtual + delta < this.velocidadeMaxima && this.velocidadeAtual > 0) {
      this.velocidadeAtual += delta;
    }

    /*
    const novaVelocidade = this.velocidadeAtual + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
    */
  }

  acelerar() {
    this.alterarVelocidade(5);
  }

  freiar() {
    this.alterarVelocidade(-5);
  }

}

const carro = new Carro('Ford', 'KA', 250);
// não é possível alterar a velocidadeMaxima carro.velocidadeMaxima = 400;


// Herança
class Camaro extends Carro {

  private turbo = false;

  constructor(){
    super('Chevrolet', 'Camaro', 500);
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

// Camaro faz tudo que a classe Carro faz pois ele herdou tudo que tinha na classe Carro e ainda adicionou um novo método (ligarTurbo)
const camaro = new Camaro();
camaro.acelerar();
camaro.freiar();
camaro.ligarTurbo();