//Ejercicio 0

let promise = new Promise(
    function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
    });

promise.then(res => console.log(res));//Devuelve 1 por ser el primer resolve

//Ejercicio 1

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));