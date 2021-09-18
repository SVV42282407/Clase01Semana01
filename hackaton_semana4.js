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

    