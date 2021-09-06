//Ejercicio 0
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped = users.map(function(user){
    return {   
            'fullName': user.name + ' ' + user.surname,
            'id': user.id
            }
});/* ... your code ... */
/*usersMapped = [
{ fullName: "John Smith", id: 1 },
{ fullName: "Pete Hunt", id: 2 },
{ fullName: "Mary Key", id: 3 }
]
*/
console.log(usersMapped);

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith

//Ejercicio 1
let fruits = ["Apples", "Pear", "Orange"];// insertar un nuevo valor en la "copia"
let shoppingCart = fruits;
shoppingCart.push("Banana");// ¿Qué hay en las frutas?, 
console.log( fruits.length ); // ?
console.log(fruits);


//Ejercicio 2
let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');

const reemplazarCentral = (arr, reemplazo) =>{
    if ((arr.length % 2) == 1){
        arr[(arr.length - 1)/2] = reemplazo;
    }
    return arr;
}

reemplazarCentral(styles, 'Classics');
console.log(styles);

console.log(styles.shift());

styles.unshift('Rap', 'Reggae');

//Ejercicio 3
let acumulador = [];
/*
const sumInput = () =>{
    const numero = prompt('Ingresa un número');
    if (numero != null){
        console.log(parseInt(numero));
        if (!isNaN(parseInt(numero))){
            acumulador.push(parseInt(numero));
            sumInput();
        } else {
            console.log(acumulador);
            alert (acumulador.reduce((a,b) => a + b, 0));
        }
    } else {
        console.log(acumulador);
        alert (acumulador.reduce((a,b) => a + b, 0));
    }
}

sumInput();
*/

//Ejercicio 4
const filterRange = (arr, a, b) =>{
    return newArray = arr.filter(function(x){
        if(x >= a && x <= b){
            return x;
        }
    });
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)


//Ejercicio 5

const copySorted = (arr) =>{
    return [...arr].sort();
}

let newArr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(newArr);
console.log( sorted ); // CSS, HTML, JavaScript
console.log( newArr ); // HTML, JavaScript, CSS (no changes)

//Ejercicio 6
function Calculator(){
    this.calculate = function(str){
        var arr = str.split(' ');
        return this.operations[arr[1]](parseInt(arr[0]), parseInt(arr[2]));
    }

    this.operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y
    }

   this.addMethod = function(str, operation){
        var arr = str.split(' ');
        this.operations[arr[1]] = operation;
    }

}

let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10

/*let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8*/

//Ejercicio 8 (No hay 7)
let login = 'Director';

if (login == 'Empleado') {
    mensaje = 'Hola';
    } else if (login == 'Director') {
    mensaje = 'Saludos';
    } else if (login == '') {
    mensaje = 'Sin inicio de sesión';
    } else {
    mensaje = '';
    }

var mensaje = login == 'Empleado' ? 'Hola' : login == 'Director' ? 'Saludos' : login == '' ? 'Sin inicio de sesión' : '';

console.log(mensaje);

