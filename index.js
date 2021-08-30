/*console.log('Hola');
alert('Hola');
let date = new Date();
console.log("Today is " + date);
console.log(`Today is ${date}`);

document.body.innerHTML = `<h1>Today's date is ${date}</h1>`;

let p = document.createElement('p');
let t = document.createTextNode('Hola, Bienvenido');
p.appendChild(t);

document.body.appendChild(p);*/

let name = "Daniel"
console.log('Hola, ' + name);
console.log('Hola name: ' + name);
console.log(`Hola, ${name}`);

const stringObject = new String('I am a string');
console.log(typeof stringObject);
const stringPrimitive = "     dog cat fish    ";

console.log(stringPrimitive[0]);
console.log(stringPrimitive.charAt(0));
console.log(stringPrimitive.indexOf('m'));
console.log(stringPrimitive.lastIndexOf('a'));
console.log(stringPrimitive.slice(8,11));//substring
console.log(stringPrimitive.toUpperCase());
console.log(stringPrimitive.toLowerCase());
console.log(stringPrimitive.split('-', 2));//divide strings por delimitador
console.log(stringPrimitive.trim());//elimina espacios en blanco al inicio y final de una cadena

const newString = stringPrimitive.replace('dog', 'Eagle');//reemplaza en cadena el valor buscado por el nuevo valor
console.log(newString);

//buscar sobre expresiones regulares

//Conversión de datos

//implicit conversion
//substraction
console.log("15"-"10");

//módulo

console.log("15" % "10");

//concatenations para
console.log("15" + "10");

const numberExample = 49;
const stringValue = String(numberExample);
console.log(true);
console.log(numberExample.toString());
console.log(typeof stringValue);
console.log(typeof numberExample);

const street = "59";
console.log(Number(street));

//NaN significa not a number
