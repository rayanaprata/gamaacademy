console.log("Hello world!");

// create variables with JS
var myName;
var itsIdealUseCamelCase;

let language = "JavaScript";
const pattern = "ECMAScript";

/*
VAR: 
 - Escopo Global;
 - Escopo de Função;
 - Pode ser ressignificado;
 - Pode ser redeclarado;
 - Pode ser hospedado;

LET:
 - Escopo de Função;
 - Escopo bloqueado;
 - Pode ser ressignificado;

CONST:
 - Escopo de Função;
 - Escopo bloqueado;
 - Não pode ser ressignificado;
*/

// ====================
{
  var age = 12;
}
console.log(age);
// ====================
// hoisting:
{
  let name = "Maria"; //declarando uma variavel de escopo bloqueado
}
console.log(name);
// ====================

// Objeto, array e função

//objeto
var person = {
  name: "Rayana",
  age: 20,
};

//array
var students = ["Maria", "João", "Paulo"];

//function
function sum(x, y) {
  return x + y;
}

//operador typeof
console.log(typeof 32); //retorna number

var isStudent = false;
console.log(typeof isStudent); //retorna boolean

// addition +
var sumTwoNumbers = 2 + 5;
console.log(sumTwoNumbers);

// subtraction -
var subTwoNumbers = 2 - 5;
console.log(subTwoNumbers);

// multiplication
var multTwoNumbers = 2 * 5;
console.log(multTwoNumbers);

// division
var divTwoNumbers = 2 / 5;
console.log(divTwoNumbers);

// rest of division
console.log(2 % 8);

// increment ++
var a = 1;
a++; // a = 1 + 1

// decrement --
var b = 1;
b--; // b = 1 - 1

// switch

var month = "january";

switch (month) {
  case "january":
    console.log("Month 1");
    break;

  case "february":
    console.log("Month 2");
    break;

  case "march":
    console.log("Month 3");
    break;

  default:
    console.log("None of the cases were attended");
}

var fruits = ["Banana", "Apple", "Orange"];

// while
var cont = 0;
while (cont < fruits.length) {
  console.log(fruits[cont]);
  cont++;
}

// do while
var num2 = 0;
do {
  num2++;
  console.log(num2);
} while (num2 < 10);

// for
var colors = ["Blue", "Red", "Grey"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

function sayHello(name, lastName) {
  console.log("Hello " + name + " " + lastName + "!");
}

sayHello("Rayana", "Neves");

// classes

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  //methods

  read() {
    return `I'm reading ${this.title}`;
  }
}

// herança

class ItBook extends Book {
  constructor(title, author, pages, tecnology) {
    super(title, author, pages);
    this.tecnology = tecnology;
  }
}

let itBook = new ItBook("Algoritmos para viver", "Brian", 500, "Algoritmos");
//let otherBook = new Book("Um Exu em Nova York", "Cidinha da Silva", 100);

console.log(itBook);
console.log(itBook.read());

// encapsulamento com getters e setters

class DataPerson {
  constructor(name) {
    this._name = name; // incluindo o underline (_) dizemos que este atributo seria strict ou privado
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let dataPerson = new DataPerson("Rayana");
dataPerson.name = "Maria";

console.log(dataPerson.name);
