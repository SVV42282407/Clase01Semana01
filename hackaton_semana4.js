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

//Ejercicio 2
//promise.then(f1).catch(f2);
//Versus:
//promise.then(f1, f2);

//Rpta: Es posible usar cualquiera, sin embargo es recomendable usar catch por el manejo de errores de una manera más clara.

//Ejercicio 3:
//fetch se puede usar en el browser

function loadJson(url) {
    return fetch(url)
     .then(response => {
        if (response.status == 200) { 
            return response.json();
        } else { 
            throw new Error(response.status);
        }
    });
}

//loadJson('no-such-user.json').catch(err => console.log(err)); // Error: 404

async function loadJsonAsync(url){
    let response = await fetch(url);
    if (response.status == 200) { 
        return response.json();
    } else { 
        throw new Error(response.status);
    }
}

//loadJsonAsync('no-such-user.json'); // Error: 404

//Ejercicio 4
class HttpError extends Error {
    constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
    .then(response => { 
    if (response.status == 200) {
        return response.json(); 
    } else {
        throw new HttpError(response); }
    });
}
    // Ask for a user name until github returns a valid userfunction 
function demoGithubUser() { 
    let name = prompt("Enter a name?", "iliakan"); 
    return loadJson(`https://api.github.com/users/${name}`) 
        .then(user => { alert(`Full name: ${user.name}.`); return user; }) 
        .catch(err => { 
            if (err instanceof HttpError && err.response.status == 404) { 
                alert("No such user, please reenter.");
                return demoGithubUser(); 
            } else { 
                throw err; 
            } 
        });
}

demoGithubUser();

async function demoGithubUserAsync(){
    let name = prompt("Enter a name?", "iliakan"); 
    try {
        await loadJson(`https://api.github.com/users/${name}`);
    } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) { 
            alert("No such user, please reenter.");
            return demoGithubUserAsync(); 
        } else { 
            throw err; 
        } 
    }
}

//Ejercicio 5
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    return 10;
}

function f() {
    // ... ¿qué deberías escribir aquí? // necesitamos llamar async wait () y esperar para 
    //obtener 10 // recuerda, no podemos usar "await"

    //Respuesta: Recordemos que una función declarada como async sigue siendo una promesa, por lo tanto podemos usar then catch finally según sea necesario
    return wait().then(res => console.log(res));
}

//Ejercicio 6

new Promise(function(resolve, reject) {
    setTimeout(() => {
    throw new Error("Whoops!");
    }, 1000);
    }).catch(alert);
 //Respuesta: Los errores que se lancen dentro de funciones asíncronas actuarán como errores no capturados, por lo tanto catch mostarará el error Whoops!
    
//Ejercicio 7

function  printNumbers (from, to){
    console.log(from);

}
    