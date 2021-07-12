// boolean
const contaPaga: boolean = false;


// number
const idade: number = 23;
const altura: number = 1.70;


// string
const nome: string = 'Rayana';


// array
const idades: number[] = [18, 25, 32, 40, 54, 60];
const idades2: Array<number> = [1, 2, 3, 4, 5, 6];


// tuple  --> Posso definir mais de um tipo de dado para os elementos do array
let dadosPessoa: [string, string, number, boolean];
dadosPessoa = ['Rayana', 'Prata', 20, true];


// enum 
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;


// any  --> um tipo para qualquer coisa, utilizado quando não sei o tipo de dado que vou receber

const retornoDaAPI: any[] = [18, 'Maria', true];
const retornoDaAPI2: any = {
  // ...
}


// void
function printarNaTela(msg: string): void { // incluir o tipo void da função (: void) é opcional
  console.log(msg)
}


// null e undefined
const un: undefined = undefined;
const nu: null = null;


// object
function criar(obj: object) {
  return console.log(obj);
}

criar({
  // aqui vai as propriedades do objeto que vou passar pra função
  propriedades: 1,
})


// never
function loopInfinito(): never {
  while (true) {
  }
}

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function falha() {
  return erro('Algo falhou');
}


// Union Types
function exibirNota(nota: number | string) { // o parâmetro nota pode ser number ou string neste caso
  console.log(`A nota é ${nota}`);
}

exibirNota('10');


// alias   --> atalhos para os tipos

type Funcionarios = Array<string | number> | Array<number> | Array<boolean>;
const funcionarios: Funcionarios = ['Joel', 25, 'Israel', 30, 'Manuel', 40, 'Gabriel', 58];

function tratarFuncionarios(funcionarios: Funcionarios) {
  return funcionarios;
}

type Frutas = Array<string> | Array<number> | Array<boolean>;
const frutas: Frutas = [false, true];


type Pessoa = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date
}

type Clientes = Array<Pessoa>;
const clientes: Clientes = [
  {
    nome: 'João',
    sobrenome: 'Pedro',
    dataNascimento: new Date()
  },
  {
    nome: 'Maria',
    sobrenome: 'Rosa',
    dataNascimento: new Date()
  }
];

function tratarClientes(clientes: Clientes) {
  for(let cliente of clientes) {
    console.log(`Nome do cliente: ${cliente.nome}`);
  }
}


// valores nulos ou opcionais
let telefone: number | null = 98659685;
telefone = null;

// Assim não funciona 
// let campoOpcional?: string = 'teste campo opcional';

type Contato = {
  telefone1: string;
  telefone2?: string;
}

const contato: Contato = {
  telefone1: '4798658458'
}


// Type Assertion
const minhaIdade: any = 20;
(minhaIdade as number).toString();



const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value); // ele espera um HTMLElement ou null

const input2 = <HTMLInputElement>document.getElementById("numero1");
console.log(input2.value);
