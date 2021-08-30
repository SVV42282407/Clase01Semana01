//Ejercicio #8

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(object){
    if (typeof object === 'object' && object !== null){
        for (const property in object){
            if(typeof object[property] === 'number' && object[property] !== null){
                object[property] = object[property] * 2;
            }
        }
    }
}

multiplyNumeric(menu);

// after the call
console.log(menu);

//Ejercicio #7
let salaries = { 
    John: 100,
    Ann: 160,
    Pete: 130
}

function calculateSalaries(salaries){
    let response = 0;
    if(typeof salaries === 'object' && salaries !== null){
        if( !isEmpty(salaries) ){
            for (const salary in salaries){
                if(typeof salaries[salary] === 'number' && salaries[salary] !== null){
                    response += salaries[salary];
                }
            }
        }
    }
    return response;
}

console.log('Salaries: ' + calculateSalaries(salaries));

//Ejercicio #6
function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

let schedule = {};
console.log( isEmpty(schedule) ); // true 
schedule["8:30"] = "get up"; 
console.log( isEmpty(schedule) ); // false

//Ejercicio #5
let user = {};
user['name'] = 'John';
user['surname'] = 'Smith';
user.name = 'Pete';
delete user.name;

//Ejercicio #4
let name = "Ilya";
console.log( `hello ${1}` ); // hello 1
console.log( `hello ${"name"}` ); // hello name
console.log( `hello ${name}` ); // hello Ilya

//Ejercicio #3
//El uso de notación en mayúsculas para la declaración de constantes no es obligatorio, sin embargo puede ser una buena práctica por legibilidad dentro de nuestro código al recordarnos que estamos trabajando con una constante dentro de las operaciones y funciones que vayamos desarrollando. En otros lenguajes también se utiliza notación en mayúsculas para constantes con el mismo propósito.

//Ejercicio #2
let planetaTierra = '';
let visitanteWeb = '';

//Ejercicio #1
let name = '';
name = 'Jhon';
let admin = name;
console.log(name); //alert(name) da error: ReferenceError: alert is not defined, porque sirve dentro de un browser, no en la consola de node.