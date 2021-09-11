//Ejercicio 0

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr){
    return arr.filter((v, i, a) => a.indexOf(v) === i);
}

console.log(unique(values));

//Ejercicio 1

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
    for (el in arr){
        var orderedString = arr[el].toLowerCase().split('').sort().join('');
        for (ot in arr){
            if(ot === el){
                continue;
            }
            if (orderedString === arr[ot].toLowerCase().split('').sort().join('')){
                //remove word from array
                arr.splice(ot, 1);
            }
        }
    }
    return arr;
}

console.log(aclean(arr));

//Ejercicio 2

let map = new Map();
map.set("name", "John");
let keys = map.keys();
//keys.push("more");
map.set('more', '');
console.log(map);

//Ejercicio 3

var i = 3;
while (i) { console.log( i-- );}
//El valor i-- es el valor de i antes del decremento, por tanto mostrará 3.

//Ejercicio 4

var i = 0;
while (++i < 5) console.log( i );

var i = 0;
while (i++ < 5) console.log( i );

//No consolean los mismos valores por la posición del acumulador como prefijo en el caso 1 y sufijo en el caso 2. El valor i++ es el valor de i antes del incremento. El valor ++i es el valor de i después del incremento.

//Ejercicio 5

//confirm works in browser

/*function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}*/

/*
const ask = (question, yes, no) =>{
    if (confirm(question)) yes();
    else no();
}
*/

/*ask(
    "Do you agree?",
    function() {
    console.log("You agreed."); },
    function() {
    console.log("You canceled the execution."); }
    );
*/

//Ejercicio 6

function makeCounter() { 
    let count = 0 ;
    function counter(){ 
        return counter.count++; 
    }; 
    function set(value){
        counter.count = value;
    };
    function decrease(){
        return counter.count--;
    };
    counter.set = set;
    counter.decrease = decrease;
    counter.count = 0; 
    return counter; 
}

let counter = makeCounter();
console.log('Ejercicio 6:');
console.log(counter());
console.log(counter());
counter.set(5);
console.log(counter());
console.log(counter());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());

//Ejercicio 7
//const number = prompt('Ingresa un número');
//getNumber(number);

function getNumber(number){
    switch(number){
        case number >= 100:
            getNumber(number);
            break;
        default:
            break;
    }
}



//Ejercicio 8
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

var listElements = [];

function iterate(obj, stack) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                iterate(obj[property], stack + '.' + property);
            } else {
                //console.log(property + "   " + obj[property]);
                listElements.push(obj[property]);
            }
        }
    }
    return listElements;
}

console.log(iterate(list, ''));